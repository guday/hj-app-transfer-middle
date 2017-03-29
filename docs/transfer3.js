/**
 */
var babylon = require("babylon");
var traverse = require("babel-traverse").default;
var generate = require("babel-generator").default;
var t = require("babel-types");
var fs = require("fs");

function getFullAst(src, option) {
    option = option || {
            sourceType: "module"
        }
    return babylon.parse(src + "", option)
}


var keyFunctionNameMap = {
    "controller": true
}

var oldPath = "./srcOld.js";
var oldDstPath = "./dstOld3.js";
var oldContent = fs.readFileSync(oldPath, "utf8");

var oldDst = getFullAst(oldContent);
mainTransfer(oldDst)


function mainTransfer(ast) {


    var newAst = null;
    var bodyVariableMap = {};


    traverse(ast, {

        //直接调用的表达式
        CallExpression: {
            enter: function (path) {
                var node = path.node;
                //app.controller
                if (node.callee && node.callee.property && keyFunctionNameMap[node.callee.property.name] && node.callee.object && node.callee.object.name == "app") {
                    //app.controller
                    var args = node.arguments;
                    if (args.length != 2) {
                        reportError(1);
                        //报错
                        return;
                    }

                    var controllerName = args[0].value;
                    var mainArr = args[1].elements;

                    // console.log(mainArrPath)
                    //controller name
                    // console.log("controllerName", controllerName)
                    if (!mainArr.length) {
                        //报错
                        reportError(2);
                        return;
                    }

                    var injectArr = [];
                    var i = 0, len = mainArr.length - 1
                    for (; i < len; i++) {
                        injectArr.push(mainArr[i].value);
                    }
                    var mainFunctionIndex = i;
                    //mainFunction
                    var mainFn = mainArr[mainFunctionIndex];
                    if (mainFn.type != "FunctionExpression") {
                        //报错
                        reportError(3);
                        return;
                    }
                    //mainFunctionBody
                    var mainBodyArr = mainFn.body.body;
                    if (!mainBodyArr.length) {
                        //报错
                        reportError(4);
                        return;
                    }


                    generateMain(controllerName, injectArr);
                    var constructorInfo = [];
                    var methodBodyInfo = [];

                    var mapObj = {};
                    var mapObj1 = {};
                    for (var i in mainBodyArr) {
                        var bodyPath = path.get("arguments.1.elements." + mainFunctionIndex + ".body.body." + i);
                        // console.log("==>", bodyPath.node)
                        bodyPath.traverse({
                            // ObjectMethod: {
                            //     enter(path){
                            //         console.log("ObjectMethod")
                            //         var node = path.node;
                            //         // var params = path.get("params");
                            //         var params = node.params;
                            //         // var body = path.get("body");
                            //         var body = node.body;
                            //         // var async = path.get("async");
                            //         var async = node.async;
                            //         // console.log( async)
                            //         var key = node.key;
                            //         var kind = node.kind;
                            //         if (kind == "method") {
                            //             path.replaceWith(
                            //                 t.ObjectProperty(key, t.arrowFunctionExpression(params, body, async))
                            //             );
                            //         }
                            //
                            //     }
                            // },
                            // FunctionExpression: {
                            //     enter(path){
                            //         console.log("FunctionExpression")
                            //         var node = path.node;
                            //         var params = node.params;
                            //         var body = node.body;
                            //         var async = node.async;
                            //         path.replaceWith(
                            //             t.arrowFunctionExpression(params, body, async)
                            //         );
                            //     }
                            // },
                            // FunctionDeclaration: {
                            //     enter(path) {
                            //         console.log("FunctionDeclaration")
                            //         var node = path.node;
                            //         var params = node.params;
                            //         var body = node.body;
                            //         var async = node.async;
                            //         path.replaceWith(
                            //             t.arrowFunctionExpression(params, body, async)
                            //         );
                            //     }
                            // }
                            Identifier: {
                                enter(path) {
                                    var node = path.node;

                                    // if (node.name != "param2" && node.name != "mutiFun" && node.name != "mutiVar3") {
                                    //     return;
                                    // }

                                    if (path.isReferencedIdentifier()) {
                                        var pathKeyArr = [];
                                        var parentPath = path.find(function (path) {

                                            mapObj[path.key] = true;
                                            mapObj1[path.parentKey] = true;

                                            // console.log("key",path.key)
                                            // console.log("parentKey",path.parentKey)
                                            var key = path.key;
                                            var parentKey = path.parentKey;

                                            if (key != parentKey) {
                                                if (parentKey == "arguments") {
                                                    pathKeyArr.push(key);
                                                }
                                                pathKeyArr.push(parentKey);
                                            } else {
                                                pathKeyArr.push(key);
                                            }
                                            return path.isCallExpression() || path.isAssignmentExpression() || path.isVariableDeclarator();
                                        })
                                        if (parentPath) {

                                            console.log("=>", pathKeyArr, node.loc.start.line)
                                            var sFlag = false;
                                            if (pathKeyArr[0] == "1") {
                                                // console.log("==>", parentPath.node);
                                                sFlag = true;
                                            }

                                            var itemNameMap = {
                                                "left": true,
                                                "callee": true,
                                                "right": true,
                                                "arguments": true,
                                                // "object": true,
                                                "init": true,
                                                "property": true,
                                            }

                                            if (pathKeyArr.length > 0) {
                                                var dstNode = parentPath.node;
                                                var flag = false;
                                                for (var j = 0, len = pathKeyArr.length; j < len - 1; j++) {
                                                    var itemName = pathKeyArr[j];

                                                    if (itemNameMap[itemName]) {
                                                        for (var k = len - 2; k >= j; k--) {
                                                            if (pathKeyArr[k] == "arguments") {
                                                                j--;
                                                            }
                                                            dstNode = dstNode[pathKeyArr[k]];
                                                        }
                                                        // sFlag && console.log("::", dstNode)
                                                        var dstNodeName = getNodeName(dstNode, node);
                                                        // console.log(dstNode);
                                                        //
                                                        flag = true;
                                                        break;
                                                    }
                                                    // dstNode =
                                                }
                                                if (!flag) {
                                                    console.log("===>", "error1")
                                                }
                                            } else {
                                                console.log("===>", "error0")
                                            }
                                        } else {
                                            //error
                                            console.log("===>", "error")
                                        }
                                    }


                                }
                            }
                        });

                    }

                    // console.log(JSON.stringify(mapObj), JSON.stringify(mapObj1))
                    // // getBodyInfoName(mainBodyArr);
                    // generateClassMethod(constructorInfo, methodBodyInfo);
                }
            }

        }
    });

    //1、取得一级变量列表
    function getBodyInfoName(mainBodyArr) {
        // bodyVariableMap
        for (var i in mainBodyArr) {
            var bodyNode = mainBodyArr[i];
            // console.log("==>", bodyPath.node == bodyNode)
            switch (bodyNode.type) {
                case "VariableDeclaration":
                    var headInfo = [];
                    for (var j in bodyNode.declarations) {
                        var itemNode = bodyNode.declarations[j];
                        if (itemNode.init && itemNode.init.type == "FunctionExpression") {
                            var fnName = itemNode.id.name;
                            if (bodyVariableMap[fnName]) {
                                reportError(10);
                            }
                            bodyVariableMap[fnName] = true;
                        } else {

                        }
                    }


                    break;
                case "ExpressionStatement":
                    if (bodyNode.expression.type == "AssignmentExpression") {
                        var expression = bodyNode.expression;
                        if (expression.right && expression.right.type == "FunctionExpression") {
                            var fnName = getNodeName(expression.left);
                            if (bodyVariableMap[fnName]) {
                                reportError(11);
                            }
                            bodyVariableMap[fnName] = true;
                        }
                    }

                    break;
                case "FunctionDeclaration":

                    var fnName = getNodeName(bodyNode.id);
                    if (bodyVariableMap[fnName]) {
                        reportError(11);
                    }
                    bodyVariableMap[fnName] = true;
                    break;
                case "IfStatement":
                case "TryStatement":
                case "ForInStatement":
                    break;

                case "EmptyStatement":
                    break;
                default:
                    //报错
                    break;
            }
        }
    }

    function generateMain(controllerName, injectArr) {
        //import
        //export
        //class
        // console.log("begin generateMain", controllerName, injectArr)
        injectArr = injectArr.map(function (item) {
            return "'" + item + "'";
        });
        injectArr.unshift("this")
        var injectStr = injectArr.join(", ");

        var tmp = `/**
        *
        */
import { BaseView } from 'js/base.view.js';
import { services } from 'js/app.services.js';

class ${controllerName} extends BaseView {
    constructor($scope) {
    services.inject(${injectStr});
    }
}

export { ${controllerName} };
`;
        var option = {
            sourceType: "module"
        };
        newAst = babylon.parse(tmp + "", option)


    }

    function generateClassMethod(constructorInfo, methodBodyInfo) {

        if (newAst) {

            traverse(newAst, {
                ClassMethod: {
                    enter: function (path) {
                        var node = path.node;
                        if (node.key.name == "constructor") {
                            console.log("constructorInfo", constructorInfo.length);
                            console.log("methodBodyInfo", methodBodyInfo.length);
                            var mainNode = node;
                            if (!(node.body instanceof Array)) {
                                mainNode = path.get('body');
                            }

                            // for (var i in constructorInfo) {
                            mainNode.pushContainer('body', constructorInfo);
                            // }

                            // for (var i in methodBodyInfo) {
                            path.insertAfter(methodBodyInfo);
                            // path.insertChildAfter()
                            // }

                        }
                    }
                }
            })

            var output = generate(newAst);

            fs.writeFile(oldDstPath, output.code, "utf8");
            // for (var i in output) {
            //     console.log(i);
            //     console.log(output[i]);
            // }
            // console.log("after write:", output)
        }

    }
}


function parseStr(obj) {
    var src = JSON.stringify(obj);
    src = "var a = " + src;
    return src;
}


function reportError(type) {
    console.log("error:", type)
}

function getNodeName(node, srcNode) {

    var srcName = srcNode.name;

    var nameArr = [];
    switch (node.type) {
        case "Identifier":
            pushValue(node.name);
            break;
        case "MemberExpression":
            deepMemberExpression(node)
            break;
        default:
            //error
            break;
    }

    var preFixArr = [];
    if (!nameArr.length) {
        console.log("=>", "error");
    } else {
        if (nameArr[0] != srcName) {
            console.log("=>", "nameError");
        } else {
            preFixArr = nameArr.slice(1);
        }
    }

    var name = nameArr.join(".");
    var preFixName = preFixArr.join(".");
    console.log("==>", name, ":", srcName, preFixName)
    return name;

    function deepMemberExpression(subNode) {
        if (subNode.type == "MemberExpression") {
            deepMemberExpression(subNode.object);
            pushValue(subNode.property.name);
        } else if (subNode.type == "Identifier") {
            pushValue(subNode.name);
        } else {
            //error
        }
    }

    function pushValue(value) {
        value != undefined && nameArr.push(value);
    }
}