var path = require("path");
var transfer = require("./transferMiddler").default

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

var dstFilePath = getDstFilePath(srcFilePath);
console.log("转换源文件", srcFilePath);
console.log("转目的文件", dstFilePath);

transfer(srcFilePath, dstFilePath, true)

function getDstFilePath(srcFullPath) {
    var dstFileFix = ".transfer";
    var srcFilePathObj = path.parse(srcFilePath);
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
