/**
 *  第一步：
 *
 * 获取老代码一级结构的所有类型。

 ```
 [
 'VariableDeclaration',    //变量申明    var plat = 'android';
 'ExpressionStatement',    //表达式    $scope.isDebug = DEBUG;
 'IfStatement',                //if语句
 'FunctionDeclaration',    //函数申明    function initNativeUpdateItem() {}
 'TryStatement',            //try 语句
 'EmptyStatement',            //空格
 'ForInStatement'            //for循环
 ]

 ```
 * 获取老代码中$scope下的多级变量
 * 相应处理方案
 1. 所有函数申明，提取到外部
 2. 所有函数表达式，认为是一级函数
 3. 所有非函数表达式，所有变量申明，所有try，for，if放在构造函数中，按顺序排列。
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
var oldDstPath = "./dstOld1.js";
var oldContent = fs.readFileSync(oldPath, "utf8");

var oldDst = getFullAst(oldContent);
mainTransfer(oldDst)


function mainTransfer(ast) {


    var classMethodArr = [];
    var newAst = null;

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

                    //controller name
                    console.log("controllerName", controllerName)
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
                    //mainFunction
                    var mainFn = mainArr[i];
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

                    // //搜集一级结构
                    // for (var i in mainBodyArr) {
                    //     var nodeType = mainBodyArr[i].type;
                    //     if (!typeObj[nodeType]) {
                    //         typeObj[nodeType] = filePath;
                    //         typeArr.push(nodeType);
                    //         // if (nodeType == "EmptyStatement") {
                    //         //     console.log("==>", filePath);
                    //         // }
                    //     }
                    //     // console.log(node.type);
                    // }
                    classMethodArr.push(mainBodyArr);


                    generateMain(controllerName, injectArr);
                    var constructorInfo = [];
                    var methodBodyInfo = [];

                    for (var i in mainBodyArr) {
                        var bodyNode = mainBodyArr[i];
                        switch (bodyNode.type) {
                            case "VariableDeclaration":
                                var headInfo = [];
                                for (var j in bodyNode.declarations) {
                                    var itemNode = bodyNode.declarations[j];
                                    if (itemNode.init && itemNode.init.type == "FunctionExpression") {
                                        var dstNode = itemNode.init;
                                        dstNode.type = "ClassMethod";
                                        dstNode.key = itemNode.id;
                                        methodBodyInfo.push(dstNode);
                                        // console.log(itemNode)
                                    } else {
                                        headInfo.push(itemNode);
                                    }
                                }
                                if (headInfo.length > 0) {
                                    bodyNode.declarations = headInfo;
                                    constructorInfo.push(bodyNode);
                                }

                                break;
                            case "ExpressionStatement":
                                var flag = false;
                                if (bodyNode.expression.type == "AssignmentExpression") {
                                    var expression = bodyNode.expression;
                                    if (expression.right && expression.right.type == "FunctionExpression") {
                                        var dstNode = expression.right;
                                        dstNode.type = "ClassMethod";
                                        dstNode.key = {
                                            type: "Identifier",
                                            name: expression.left.property.name
                                        };

                                        methodBodyInfo.push(dstNode);
                                        flag = true;
                                    }
                                }
                                if (!flag) {
                                    constructorInfo.push(bodyNode);
                                }
                                break;
                            case "FunctionDeclaration":

                                bodyNode.key = bodyNode.id;
                                bodyNode.type = "ClassMethod";
                                methodBodyInfo.push(bodyNode);
                                break;
                            case "IfStatement":
                            case "TryStatement":
                            case "ForInStatement":
                                constructorInfo.push(bodyNode);
                                break;

                            case "EmptyStatement":
                                break;
                            default:
                                //报错
                                break;
                        }
                    }
                    generateClassMethod(constructorInfo, methodBodyInfo);
                }
            }

        }
    });


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

        var tmp = `
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