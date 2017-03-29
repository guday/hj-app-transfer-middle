var babylon = require("babylon");
var traverse = require("babel-traverse").default;
var generate = require("babel-generator").default;
var t = require("babel-types");

var keyFunctionNameMap = {
    "controller": true,
    // "factory": true,
    // "directive": true,
    // "service": true,

};

/**
 *
 * @param source    输入源数据
 * @param param     配置
 */
module.exports = function (source, param) {


    var ast = babylon.parse(source, {
        sourceType: "module"
    });

    var errorArr = [];
    var errorObj = [];

    traverse(ast, {
        //直接调用的表达式
        CallExpression: {
            enter: function (path) {
                var node = path.node;
                ////app.controller
                if (node.callee && node.callee.property && keyFunctionNameMap[node.callee.property.name] && node.callee.object && node.callee.object.name == "app") {
                    var args = node.arguments;
                    if (args.length != 2) {
                        //报错
                        return;
                    }
                    var controllerName = args[0].value;
                    var mainArr = args[1].elements;

                    if (!mainArr.length) {
                        //报错
                        return;
                    }

                    var injectArr = [];
                    var i = 0, len = mainArr.length - 1
                    for (; i < len; i++) {
                        injectArr.push(mainArr[i].value);
                    }
                    var mainFn = mainArr[i];
                    if (mainFn.type != "FunctionExpression") {
                        //报错
                        return;
                    }
                    var mainBodyArr = mainFn.body.body;
                    if (!mainBodyArr.length) {
                        //报错
                        return;
                    }

                }
            }

        }
    });


}


