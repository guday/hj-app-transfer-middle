var path = require("path");
var transfer = require("./mainTransform").default

var arguments = process.argv.splice(2);
var rootPath = process.cwd();

var srcFilePath = arguments[0] || null;
if (!srcFilePath) {
    logInfo("第一个参数是转码相对路径，请确保填写了")
}
// if (srcFilePath.indexOf("www/js") == -1) {
//     srcFilePath = path.join(rootPath, "www/js", srcFilePath);
// } else {
srcFilePath = path.join(rootPath, srcFilePath);
// }

var isDebugFile = arguments[1] || false;

var dstFilePath = getDstFilePath(srcFilePath);
console.log("转换源文件", srcFilePath);
console.log("转目的文件", dstFilePath);

transfer(srcFilePath, dstFilePath, isDebugFile);

function getDstFilePath(srcFullPath) {
    var dstFileFix = ".transfer";
    var srcFilePathObj = path.parse(srcFullPath);
    var {
        root,
        dir,
        ext,
        name
    } = srcFilePathObj;
    name += dstFileFix;
    return path.format({
        root,
        dir,
        ext,
        name
    })
}
