/**
 * 前缀替换
 */
var babylon = require("babylon");
var traverse = require("babel-traverse").default;
var generate = require("babel-generator").default;
var t = require("babel-types");
var fs = require("fs");


var keyFunctionNameMap = {
    "controller": true
}

var oldPath = "./srcOld.js";
var oldDstPath = "./dstOld6.js";
var oldContent = fs.readFileSync(oldPath, "utf8");


var prefixMArr = {
    // "$scope.data": true,
    // "$scope.func": true,
    "$scope": true,
}


var oldDst = getFullAst(oldContent);

mainTransfer(oldDst);

var mainFunctionBodyScopeId = 0;
function mainTransfer(ast) {


    var newAst = null;
    var bodyVariableMap = {};
    var mainScopeMap = {};
    var referenceScopeNameArr = [];
    var referenceUnRootNameArr = [];

    var mainFunctionBodyPath = null;

    var controllerName = "";
    var nodeScopeTypeMap = {
        "mainFun":[],
        "firstClass":[]
    };

    //找到mainFunction
    traverse(ast, {
        //直接调用的表达式
        CallExpression: {
            enter: function (path) {
                var node = path.node;
                //app.controller
                getAppController(path, function () {
                    getMainFunctionBody(path, function (path, param) {
                        controllerName = param.controllerName;
                        mainFunctionBodyPath = path;
                        mainFunctionBodyScopeId = path.scope.uid;
                        // mainScopeMap = getMainBodyScope(mainFunctionBodyPath);
                        // console.log(mainFunctionBodyScope.bindings["$scope"])
                    })
                })
            }

        }
    });

    //对所有引用进行分类
    if (mainFunctionBodyPath) {
        //遍历出引用
        mainFunctionBodyPath.traverse({
            Identifier: {
                enter(path) {
                    var node = path.node;

                    //遍历引用的变量
                    if (path.isReferencedIdentifier()) {

                        var findResult = findInRootScope(path);

                        // if (node.name == "objVar4") {
                        // console.log("======>", getLine(path), findResult, node.name);
                        nodeScopeTypeMap[findResult] = nodeScopeTypeMap[findResult] || [];
                        nodeScopeTypeMap[findResult].push(path)
                        // }
                        // console.log(node.name)
                        // } else {
                        //     //error
                        //     console.log("===>", "error","parentPath Null")
                        // }
                    }


                }
            }
        });

        //log
        for (var i in nodeScopeTypeMap) {
            for (var j in nodeScopeTypeMap[i]) {
                var path = nodeScopeTypeMap[i][j];
                // console.log(i, getLine(path), path.node.name)
            }
        }

        //进行替换与增加前缀
        var processArr = nodeScopeTypeMap["firstClass"].concat(nodeScopeTypeMap["mainFun"]);
        for (var i in processArr) {
            var path = processArr[i];
            var name = path.node.name;
            if (name == "$scope") {
                path.replaceWith(t.identifier("this"))
            } else {
                var oldNode = path.node;
                path.replaceWith(t.memberExpression(t.thisExpression(), oldNode, false))
            }
        }

    }


    generateTest();

    function generateTest() {
        var output = generate(ast);

        fs.writeFile(oldDstPath, output.code, "utf8");
    }

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

function getNodeName(nodePath, srcNode, pathKeyArr) {

    var node = nodePath.node;

    //被引用的变量
    var keyName = srcNode.name;

    var nameArr = [];
    var pathArr = [];
    switch (node.type) {
        case "Identifier":
            pushValue(node.name, nodePath);
            break;
        case "MemberExpression":
            deepMemberExpression(nodePath);
            break;
        default:
            //error
            break;
    }

    var extraNameArr = [];
    if (!nameArr.length) {
        console.log("=>", "error", "nameArr 0", keyName, getLine(nodePath), pathKeyArr);
    } else {
        extraNameArr = nameArr.slice(1);
    }

    var name = nameArr.join(".");
    var preFixName = extraNameArr.join(".");
    // console.log("==>", name, ":", keyName, preFixName)
    return {
        name,
        keyName,
        nameArr,
        extraNameArr,
        pathArr
    };

    function deepMemberExpression(subNodePath) {
        var subNode = subNodePath.node;
        if (subNode.type == "MemberExpression") {
            deepMemberExpression(subNodePath.get("object"));
            pushValue(subNode.property.name, subNodePath);
        } else if (subNode.type == "Identifier") {
            pushValue(subNode.name, subNodePath);
        } else {
            //error
        }
    }

    function pushValue(value, path) {
        if (value != undefined) {
            nameArr.push(value);
            pathArr.push(path);

        }
    }
}

function getLine(path) {
    return path.node.loc.start.line
}

function getAppController(path, callback) {
    var node = path.node;
    if (node.callee && node.callee.property && keyFunctionNameMap[node.callee.property.name] && node.callee.object && node.callee.object.name == "app") {
        callback && callback();
    }
}

function getMainFunctionBody(path, callback) {
    var node = path.node;
    var args = node.arguments;
    if (args.length != 2) {
        reportError(1);
        //报错
        return;
    }

    var controllerName = args[0].value;
    var mainArr = args[1].elements;

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
    var mainBodyFnPath = path.get("arguments.1.elements." + mainFunctionIndex + ".body");

    callback && callback(mainBodyFnPath, {
        controllerName
    })
}

function getMainBodyScope(path) {
    var scopeMap = {};
    var node = path.node;
    for (var i in node.body) {
        var dstPath = path.get('body.' + i);
        var dstScope = dstPath.scope;
        // console.log(dstPath.scope.uid, getLine(dstPath))
        scopeMap[dstScope.uid] = dstScope;
    }

}

function findInScope(scope, name) {
    // console.log("true", scope.uid)
    if (scope.uid == 1) {
        if (scope.bindings[name]) {
            return "mainFun";
        }
        //遍历到顶部还未找到
        return "unFind";
    } else {
        if (scope.bindings[name]) {
            //子函数
            return "ownFun";
        } else {
            if (scope.parent) {
                return findInScope(scope.parent, name);
            } else {
                return false;
            }

        }
    }

    // }
}

function findInRootScope(path) {
    var scope = path.scope;
    var name = path.node.name;
    if (scope.uid == mainFunctionBodyScopeId) {
        if (scope.bindings[name]) {
            return "firstClass";
        }
        //本身是一级或者二级元素
        return "unFind";
    } else {
        if (scope.bindings[name]) {
            //子函数
            return "ownFun";
        } else {
            if (scope.parent) {
                return findInScope(scope.parent, name);
            } else {
                return false;
            }

        }
    }


}

/**
 * get ast
 * @param src
 * @param option
 * @returns {*}
 */
function getFullAst(src, option) {
    option = option || {
            sourceType: "module"
        }
    return babylon.parse(src + "", option)
}