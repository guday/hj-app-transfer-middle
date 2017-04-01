/**
 * 前缀替换
 */
var babylon = require("babylon");
var traverse = require("babel-traverse").default;
var generate = require("babel-generator").default;
var t = require("babel-types");
var fs = require("fs");
var util = require("util");

var keyFunctionNameMap = {
    "controller": true
}

var oldPath = "./srcOld.js";
var oldDstPath = "./dstOld7.js";
var oldDstPath2 = "./dstOld71.js";

var srcFilePath = "./srcOld.js";
var dstFilePath = "./dstOld.js";
var isDebugFile = false;

exports.default = main;

function main(src, dst, debugFile) {
    isDebugFile = debugFile;
    if (!src && !dst) {
        //使用默认
    } else if (src && dst) {
        //使用配置
        srcFilePath = src;
        dstFilePath = dst;
    } else {
        //不处理
        console.log("参数不齐，不干活");
        return;
    }

    var srcContent = fs.readFileSync(srcFilePath, "utf8");
    var ast = getFullAst(srcContent);
    mainTransfer(ast);

}

function mainTransfer(ast) {

    logInfo("开始转换");
    logInfo("1.序列化代码结构");
    //1、整理结构
    ast = serializeCode(ast);

    logInfo("2.代码转换");
    //2、取得一级结构信息
    var topLevelInfo = getTopLevelStructureArr(ast);

    //3、函数转换
    ast = processFunctionNameWithTopLevelInfo(ast, topLevelInfo);

    //4、前缀转换 (因为做过函数转换，所以重新取引用信息
    ast = processVarPrefix(ast);

    logInfo("3.新代码生成");
    //5、搜集信息，进行class转换
    ast = generateClassStructure(ast);

    logInfo("转换结束");
    // generateTest(ast);
    //
    // function generateTest(ast) {
    //     var output = generate(ast);
    //
    //     fs.writeFile(oldDstPath2, output.code, "utf8");
    // }


}


function reportError(type) {
    console.log("error:", type)
}


function getLine(path) {
    return path.node.loc && path.node.loc.start && path.node.loc.start.line || "-1"
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
        logError("主函数错误1");
        //报错
        return;
    }

    var controllerName = args[0].value;
    var mainArr = args[1].elements;

    // console.log("controllerName", controllerName)
    if (!mainArr.length) {
        //报错
        logError("主函数错误2");
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
        logError("主函数错误3");
        return;
    }
    //mainFunctionBody
    var mainBodyArr = mainFn.body.body;
    if (!mainBodyArr.length) {
        //报错
        logError("主函数错误4");
        return;
    }
    var mainBodyFnPath = path.get("arguments.1.elements." + mainFunctionIndex + ".body");

    callback && callback(mainBodyFnPath, {
        controllerName,
        injectArr
    })
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

function replaceToArrowFunction(path) {
    // var node = path.node;
    // for (var i in node.body) {
    //     var bodyPath = path.get("body." + i);

    // console.log("body=>", bodyPath.node.expression.left)
    path.traverse({
        ObjectMethod: {
            enter(path){
                // console.log("ObjectMethod")
                var node = path.node;
                // var params = path.get("params");
                var params = node.params;
                // var body = path.get("body");
                var body = node.body;
                // var async = path.get("async");
                var async = node.async;
                // console.log( async)
                var key = node.key;
                var kind = node.kind;
                if (kind == "method") {
                    path.replaceWith(
                        t.ObjectProperty(key, t.arrowFunctionExpression(params, body, async))
                    );
                }

            }
        },
        FunctionExpression: {
            enter(path){
                // console.log("FunctionExpression")
                var node = path.node;
                var params = node.params;
                var body = node.body;
                var async = node.async;
                path.replaceWith(
                    t.arrowFunctionExpression(params, body, async)
                );
            }
        },
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
    });
    // }
}


function generateMain(controllerName, injectArr) {
    //import
    //export
    //class
    // console.log("begin generateMain", controllerName, injectArr)
    injectArr = injectArr.map(function (item) {
        return "'" + item + "'";
    });
    injectArr.unshift("this");
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

    var newAst = babylon.parse(tmp + "", option);
    return newAst;


}

/**
 * 搜集结构信息
 * cont
 * @param path
 */
function collectStructureInfo(path) {
    var constructorInfo = [];
    var methodBodyInfo = [];

    var node = path.node;

    for (var i in node.body) {
        // traverse(bodyPath, {})
        var bodyNode = node.body[i];
        var bodyPath = path.get("body." + i);

        // console.log("=>", bodyNode.type, getLine(bodyPath))
        // console.log("==>", bodyPath.node == bodyNode)
        switch (bodyNode.type) {
            case "ExpressionStatement":
                // console.log("==>", bodyNode.expression.right && bodyNode.expression.right.type, getLine(bodyPath));
                var flag = false;
                if (bodyNode.expression.type == "AssignmentExpression") {
                    var expression = bodyNode.expression;
                    // console.log("=>", expression.right.type, getLine(bodyPath))
                    if (expression.right && expression.right.type == "ArrowFunctionExpression") {
                        var dstFunction = expression.right;

                        //需要找到被应用位置，一起修改吧
                        // console.log("bodyPath=>:", bodyPath.scope)

                        var kind = "method";
                        var key = expression.left;
                        var params = dstFunction.params;
                        var body = dstFunction.body;
                        var computed = false;
                        var static = false;


                        var strKey = generate(key).code;
                        var keyArr = strKey.split('.');

                        if (keyArr.length > 1) {
                            var keyNewStr = "";
                            if (keyArr[0] == "this") {
                                keyNewStr = keyArr[1]
                                key = t.identifier(keyNewStr);
                            }
                            if (keyArr.length > 2) {
                                //error
                            }
                        }

                        //
                        // logError(key)
                        // logError(params)
                        // logError(body)
                        // t.classMethod(kind, key, params, body, computed, static)
                        methodBodyInfo.push(t.classMethod(kind, key, params, body, computed, static));

                        flag = true;
                    }
                }
                if (!flag) {
                    constructorInfo.push(bodyNode);
                }
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
                console.log("collectStructureInfo", "unknown type");
                break;
        }
    }
    return {
        constructorInfo, methodBodyInfo
    }
}
function generateClassMethod(ast, param) {

    var constructorInfo = param.constructorInfo;
    var methodBodyInfo = param.methodBodyInfo;
    if (ast) {

        traverse(ast, {
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

        var output = generate(ast);

        fs.writeFile(dstFilePath, output.code, "utf8");
        // for (var i in output) {
        //     console.log(i);
        //     console.log(output[i]);
        // }
        // console.log("after write:", output)
    }

}


function preprocessAst(ast, callback) {
    var controllerName,
        injectArr,
        mainFunctionBodyPath,
        param;
    traverse(ast, {
        //直接调用的表达式
        CallExpression: {
            enter: function (path) {
                var node = path.node;
                //app.controller
                getAppController(path, function () {
                    getMainFunctionBody(path, function (path, _param) {
                        param = _param;
                        controllerName = _param.controllerName;
                        injectArr = _param.injectArr;
                        mainFunctionBodyPath = path;

                        //进行中处理
                        callback && callback({
                            param,
                            mainFunctionBodyPath
                        })
                    })
                })
            }

        }
    });
    if (!controllerName) {
        logError("未找到模块名称");
    }
    return {
        param,
        mainFunctionBodyPath
    }
}


function logError() {
    var arg = arguments;
    var arr = [];
    for (var i in arg) {
        if (typeof (arg[i]) == "object") {
            arr.push(util.inspect(arg[i]));
        } else {
            arr.push(arg[i])
        }
    }
    console.log("error===>", arr.join(" "))
}
//
// var topLevelStructureArr = [];      //A
// var topLevelVar =[];                //B
// var topLevelModuleArr =[];          //C
// var topLevelVarReferenceArr = [];   //D
// var topLevelFunctionLeftArr = [];   //E

function getTopLevelStructureArr(ast) {
    var topLevelStructureArr = [];      //A
    var topLevelVar = [];                //B
    var topLevelModuleArr = [];          //C
    var topLevelVarReference = {};      //D
    var topLevelFunctionLeftArr = [];   //E

    var astInfo = preprocessAst(ast);
    var {
        param,
        mainFunctionBodyPath
    } = astInfo;

    topLevelVarReference = mainFunctionBodyPath.scope.bindings;
    // console.log(topLevelVarReference)
    for (var i in topLevelVarReference) {
        topLevelVar.push(topLevelVarReference[i].path);
    }
    // logError(topLevelVar);

    var mainFunctionBodyNode = mainFunctionBodyPath.node;
    for (var i in mainFunctionBodyNode.body) {
        var bodyNode = mainFunctionBodyNode.body[i];
        var bodyPath = mainFunctionBodyPath.get("body." + i);
        topLevelModuleArr.push(bodyNode);
        // logError(bodyNode.type);

        switch (bodyNode.type) {
            case "ExpressionStatement":
                var dstNode = bodyNode.expression;
                if (dstNode.type == "AssignmentExpression") {
                    var right = dstNode.right;
                    if (right && right.type == "ArrowFunctionExpression") {
                        var dstPath = bodyPath.get("expression.left");
                        topLevelFunctionLeftArr.push(dstPath);
                        // logError(getLine(dstPath))
                    }
                    // logError(right.type)
                }
                break;
            case "VariableDeclaration":
                var dstNode = bodyNode.declarations[0];
                var init = dstNode.init;
                if (init && init.type == "ArrowFunctionExpression") {
                    var dstPath = bodyPath.get("declarations.0.id");
                    topLevelFunctionLeftArr.push(dstPath)
                    // logError(getLine(dstPath))
                }
                break;
            default:
                break;
        }
    }

    return {
        topLevelStructureArr,
        topLevelVar,
        topLevelModuleArr,
        topLevelVarReference,
        topLevelFunctionLeftArr
    }

}

function updateAstStructure(ast) {
    var output = generate(ast);
    return getFullAst(output.code);
}

/**
 * 格式化代码，方便后续分析
 * @param ast
 * @returns {*}
 */
function serializeCode(ast) {
    preprocessAst(ast, function (astInfo) {
        //此处理需要用到contexts，所以需要在traveal中进行。
        var {
            param,
            mainFunctionBodyPath
        } = astInfo;
        // * 对var 分拆
        // * 对逗号表达式分拆
        // * 对函数进行箭头化
        // * 前置申明的函数，改成表达式申明（后续统一转化成class函数）
        var mainFunctionBodyNode = mainFunctionBodyPath.node;
        var replaceArr = [];
        for (var i in mainFunctionBodyNode.body) {
            var bodyPath = mainFunctionBodyPath.get("body." + i);
            var bodyNode = bodyPath.node;
            // logError(bodyNode.type, getLine(bodyPath))
            console.log(bodyNode.type)
            switch (bodyNode.type) {
                case "VariableDeclaration":
                    if (bodyNode.declarations.length == 0) {
                        //删除
                        // bodyPath.remove();
                        replaceArr.push({
                            path: bodyPath,
                            method: "remove"
                        })
                    } else if (bodyNode.declarations.length > 0) {
                        //多个替换一个

                        var newPathArr = [];

                        for (var i in bodyNode.declarations) {
                            var nodeVariableDeclarator = bodyNode.declarations[i];

                            var kind = bodyNode.kind;
                            var declarations = [nodeVariableDeclarator];

                            //t.variableDeclaration(kind, declarations)
                            var newNode = t.variableDeclaration(kind, declarations);
                            newPathArr.push(newNode);
                            // console.log(newNode)
                        }

                        // bodyPath.replaceWithMultiple(newPathArr);
                        replaceArr.push({
                            path: bodyPath,
                            method: "replaceWithMultiple",
                            dst: newPathArr
                        })
                    }
                    break;
                case "FunctionDeclaration":

                    var id = bodyNode.id;
                    var params = bodyNode.params;
                    var body = bodyNode.body;
                    var async = bodyNode.async;

                    var declarations = [t.variableDeclarator(id, t.arrowFunctionExpression(params, body, async))];
                    var newNode = t.variableDeclaration("var", declarations);
                    // bodyPath.replaceWith(newNode);
                    replaceArr.push({
                        path: bodyPath,
                        method: "replaceWith",
                        dst: newNode
                    })
                    break;
                case "ExpressionStatement":
                    if (bodyNode.expression.type == "SequenceExpression") {
                        //多个替换一个
                        var newArr = []
                        var expressions = bodyNode.expression.expressions;
                        for (var i in expressions) {
                            newArr.push(t.expressionStatement(expressions[i]));
                        }
                        // bodyPath.replaceWithMultiple(newArr);
                        replaceArr.push({
                            path: bodyPath,
                            method: "replaceWithMultiple",
                            dst: newArr
                        })
                    }
                    // logError(bodyNode.expression.type, getLine(bodyPath))
                    break;
                default:
                    break;
            }
        }

        for (var i in replaceArr) {
            var {
                method,
                path,
                dst
            } = replaceArr[i];
            switch (method) {
                case "remove":
                    path.remove();
                    break;
                case "replaceWithMultiple":
                    path.replaceWithMultiple(dst);
                    break;
                case "replaceWith":
                    path.replaceWith(dst);
                    break;

            }
        }
    });

    ast = updateAstStructure(ast);

    var astInfo = preprocessAst(ast);
    var {
        param,
        mainFunctionBodyPath
    } = astInfo;

    replaceToArrowFunction(mainFunctionBodyPath);
    return ast;
}

/**
 * 整理函数名称转换
 * @param ast
 * @param topLevelInfo
 */
function processFunctionNameWithTopLevelInfo(ast, topLevelInfo) {
    var astInfo = preprocessAst(ast);
    var {
        param,
        mainFunctionBodyPath
    } = astInfo;
    var mainFunctionBodyNode = mainFunctionBodyPath.node;

    var {
        topLevelStructureArr,       //A
        topLevelVar,                //B
        topLevelModuleArr,          //C
        topLevelVarReference,       //D
        topLevelFunctionLeftArr     //E
    } = topLevelInfo;

    var leftFullStrMap = {};
    var leftSrcStrMap = {};
    var leftFirstStrMap = {};


    //这些结构的数据，是需要转class一级函数的，所以，需要对名称进行规范
    for (var i in topLevelFunctionLeftArr) {
        var leftPath = topLevelFunctionLeftArr[i];
        var leftNode = leftPath.node;
        // console.log(leftNode.type, getLine(leftPath))
        var leftStr = getFullVarString(leftPath);
        var arr = leftStr.split('.');
        if (arr.length > 1) {
            //大于一级的情况下，才做变量替换

            var fullStr = arr.join(""),  //连起来后$scopeonClick
                srcStr = leftStr,       //原字符串$scope.onClick
                firstStr = arr[0];           //第一个前缀

            var obj = {
                fullStr, srcStr, firstStr, leftPath
            }
            leftFullStrMap[fullStr] = obj;
            leftSrcStrMap[srcStr] = obj;
            leftFirstStrMap[firstStr] = obj;
            // console.log("需要进行前缀变换的列表", srcStr, getLine(leftPath))
        }
    }


    //找出需要替换的，引用位置的节点
    var referencedPathArr = [];
    for (var i in topLevelVarReference) {
        // var aBind = topLevelVarReference[i];
        // var aPath = aBind.path;
        // if (i == "xx") {
        //     console.log(aBind)
        // }
        //先过滤第一个单词
        if (leftFirstStrMap[i]) {
            var aBind = topLevelVarReference[i];
            var aPath = aBind.path;

            // if (i == "scopeData") {
            //     // console.log(aBind.path)
            // }

            var referencePaths = aBind.referencePaths || [];

            for (var j in referencePaths) {
                var referencePath = referencePaths[j];
                if (aPath == referencePath) {
                    console.log('num:', getLine(referencePath));
                }

                var dstPath = null;
                var leftMap = null;
                getFullVarString(referencePath, function (findPath) {
                    var outPut = generate(findPath.node);
                    var code = outPut.code;
                    // console.log("=>", outPut.code, getLine(findPath));
                    if (leftSrcStrMap[code]) {
                        // console.log("对应引用位置", outPut.code, getLine(findPath));
                        dstPath = findPath;
                        leftMap = leftSrcStrMap[code];
                        return true;
                    }
                    // logError(findPath.node.type);
                    return false;
                })

                //对找到要替换的节点，进行信息保存
                if (dstPath) {
                    referencedPathArr.push({
                        dstPath,
                        leftMap
                    })
                }
                // logError(referencePath)
            }
            // logError(i, referencePaths.length)
        }
    }


    //进行引用替换
    // console.log(referencedPathArr.length)
    for (var i in referencedPathArr) {
        var {
            dstPath,
            leftMap
        } = referencedPathArr[i];

        var fullStr = leftMap.fullStr;
        // console.log(dstPath.node.type)
        dstPath.replaceWith(t.identifier(fullStr));

    }

    //一级函数需要做var处理，保证格式统一
    for (var i in mainFunctionBodyNode.body) {
        var bodyPath = mainFunctionBodyPath.get("body." + i);
        var bodyNode = bodyPath.node;

        if (bodyNode.type == "ExpressionStatement" && bodyNode.expression && bodyNode.expression.left) {
            // logError(bodyNode.type, getLine(bodyPath));
            var leftStr = generate(bodyNode.expression.left).code;
            // console.log(leftStr);
            if (leftFullStrMap[leftStr]) {
                //进行replace
                var fullStr = leftFullStrMap[leftStr].fullStr;

                var declarations = [t.variableDeclarator(t.identifier(fullStr), bodyNode.expression.right)];
                var newNode = t.variableDeclaration("var", declarations);
                bodyPath.replaceWith(newNode)
            }
        }
    }

    return ast;

}

/**
 * 处理前缀
 * @param ast
 * @param topLevelInfo
 * @returns {*}
 */
function processVarPrefix(ast) {
    ast = updateAstStructure(ast);
    var topLevelInfo = getTopLevelStructureArr(ast);

    var astInfo = preprocessAst(ast);
    var {
        param,
        mainFunctionBodyPath
    } = astInfo;
    var mainFunctionBodyNode = mainFunctionBodyPath.node;

    var {
        topLevelStructureArr,       //A
        topLevelVar,                //B
        topLevelModuleArr,          //C
        topLevelVarReference,       //D
        topLevelFunctionLeftArr     //E
    } = topLevelInfo;

    //先对引用位置进行替换
    for (var i in topLevelVarReference) {
        var aBind = topLevelVarReference[i]
        var referencePaths = aBind.referencePaths || [];
        var aPath = aBind.path;

        for (var j in referencePaths) {
            var refPath = referencePaths[j];
            var refNode = refPath.node;
            var name = refNode.name;
            // logError(refNode.name);
            if (name == "$scope") {
                refPath.replaceWith(t.identifier("this"))
            } else {
                var oldNode = refPath.node;
                refPath.replaceWith(t.memberExpression(t.thisExpression(), oldNode, false))
            }
            // logError(referenceArr[j])
        }
    }

    for (var i in topLevelVarReference) {
        var aBind = topLevelVarReference[i]
        var aPath = aBind.path;
        var aNode = aPath.node;
        if (aNode.type == "VariableDeclarator") {
            var parentPath = aPath.parentPath;
            var left = t.memberExpression(t.thisExpression(), aNode.id, false);
            var rightPath = aPath.get("init");


            if (!rightPath.node) {
                // right = t.Identifier("undefined");
                rightPath.replaceWith(t.Identifier("undefined"))
            }

            //t.assignmentExpression(operator, left, right)
            var newPathAss = t.assignmentExpression("=", left, rightPath.node);
            // //t.expressionStatement(expression)
            var newNode = t.expressionStatement(newPathAss)
            parentPath.replaceWith(newNode);
        } else if (aNode.type == "Identifier") {

            //不处理
        } else {
            //error
        }
    }

    return ast;
}


function generateClassStructure(ast) {
    ast = updateAstStructure(ast);
    var topLevelInfo = getTopLevelStructureArr(ast);

    var astInfo = preprocessAst(ast);
    var {
        param,
        mainFunctionBodyPath
    } = astInfo;
    var mainFunctionBodyNode = mainFunctionBodyPath.node;

    var structureInfo = collectStructureInfo(mainFunctionBodyPath);

    var controllerName = param.controllerName;
    var injectArr = param.injectArr;
    var newAst = generateMain(controllerName, injectArr);

    generateClassMethod(newAst, structureInfo);

    return ast;
}

function getFullVarString(path, callback) {

    var flag = false;
    if (callback) {
        if (callback(path)) {
            flag = true;
        }
    }
    if (flag) {
        return;
    }
    //找到父元素的类型非MemberExpression 为止
    while (path.parentPath.node.type == "MemberExpression" &&
    (path.parentPath.key == "object"
        // || path.parentPath.key == "left"
    )) {
        // console.log(">",path.node.type)
        path = path.parentPath;

        if (callback) {
            if (callback(path)) {
                flag = true;
                break;
            }
        }
    }

    if (flag) {
        return;
    }
    if (callback) {
        if (callback(path.parentPath)) {
            flag = true;
        }
    }
    if (flag) {
        return;
    }

    var outPut = generate(path.node);

    // if (getLine(path) == 78) {
    // console.log(outPut.code, getLine(path))
    // }
    return outPut.code;

}

function logInfo() {
    var arg = arguments;
    var arr = [];
    for (var i in arg) {
        if (typeof (arg[i]) == "object") {
            arr.push(util.inspect(arg[i]));
        } else {
            arr.push(arg[i])
        }
    }
    console.log("info=>:", arr.join(" "))
}
