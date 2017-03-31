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

    var mainFunctionBodyPath = null;

    var controllerName = "";
    var nodeScopeTypeMap = {
        "mainFun": [],
        "firstClass": []
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

    //因为之前ast执行过替换，上下文已经乱了，所以，再来一次
    var output = generate(ast);
    ast = getFullAst(output.code);

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
                        //下面的执行一定要放在traverse中，否则查不到contexts
                        processBodyFunction(mainFunctionBodyPath);
                    })
                })
            }

        }
    });

    generateTest();

    function generateTest() {
        var output = generate(ast);

        fs.writeFile(oldDstPath, output.code, "utf8");
    }


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


function transformVariableDeclaration(pathArr) {


    for (var i in pathArr) {
        //VariableDeclaration
        var newPathArr = [];
        var pathVariableDeclaration = pathArr[i];
        var nodeVariableDeclaration = pathVariableDeclaration.node;

        for (var j in nodeVariableDeclaration.declarations) {
            var pathVariableDeclarator = pathVariableDeclaration.get("declarations." + j);
            var nodeVariableDeclarator = pathVariableDeclarator.node;

            // var left = nodeVariableDeclarator.id;
            var left = pathVariableDeclarator.get("id");
            var right = pathVariableDeclarator.get("init");

            if (!right.node) {
                // right = t.Identifier("undefined");
                right.replaceWith(t.Identifier("undefined"))
            }

            // console.log("==>", getLine(left));
            left.replaceWith(t.memberExpression(t.thisExpression(), left.node, false));

            //t.assignmentExpression(operator, left, right)
            var newPathAss = t.assignmentExpression("=", left.node, right.node);
            // //t.expressionStatement(expression)
            var newNode = t.expressionStatement(newPathAss)
            //
            newPathArr.push(newNode);
            // console.log(newNode)
        }

        pathVariableDeclaration.replaceWithMultiple(newPathArr);

    }
}


function transformExpressionStatement(pathArr) {

    for (var i in pathArr) {
        //VariableDeclaration
        var path = pathArr[i];
        var node = path.node;
        //

        // var left = path.get("expression.left");
        // console.log(node)
        // var oldNode = left.node;
        // left.replaceWith(t.memberExpression(t.thisExpression(), oldNode, false));
        var params = node.params;
        var body = node.body;
        var generator = node.generator;
        var async = node.async;
        var id = node.id;


        // t.memberExpression(object, property, computed)
        var left = t.memberExpression(t.thisExpression(), id, false)
        // t.functionExpression(id, params, body, generator, async)
        var right = t.functionExpression(null, params, body, generator, async);

        path.replaceWith(t.assignmentExpression("=", left, right));

    }
}

/**
 * 特殊处理， 交给检查工具去处理吧
 * @param path
 */
function parseBodyStructure(path) {
    // var node = path.node;
    // for (var i in node.body) {
    //     var bodyPath = path.get("body." + i);
    //     console.log("body=>", bodyPath.node.expression.left)
    // }
}

//对一级结果下的变量，函数申明，进行前缀替换
function processBodyFunction(path) {
    var variableArr = [];
    var functionArr = [];
    for (var i in path.scope.bindings) {
        var aBind = path.scope.bindings[i];

        // console.log(aBind.path)
        var aPath = aBind.path;
        var aNode = aPath.node;
        // console.log(aNode.type, aNode.name)
        if (aNode.type == "VariableDeclarator") {
            //变量申明
            var aParent = aPath.parentPath;
            var flag = false;
            for (var j in variableArr) {
                if (variableArr[j] == aParent) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                variableArr.push(aParent);
            }
            // console.log("==>", aNode.id.name, aParent)
        } else if (aNode.type == "FunctionDeclaration") {
            functionArr.push(aPath);
            // console.log(aNode.type)
        } else if (aNode.type == "Identifier") {
            //一般是注入，可以不处理
        } else {
            //error
            console.log("==>", "unknown node type")
        }
        //
        // console.log(aNode.type, aNode)
    }
    // console.log(variableArr.length);
    // console.log(functionArr.length);

    transformVariableDeclaration(variableArr);
    transformExpressionStatement(functionArr);

    parseBodyStructure(path);


}