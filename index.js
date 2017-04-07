var path = require("path");
var transfer = require("./mainTransform").default;

function main(srcFilePath, param) {





    var dstFilePath = getDstFilePath(srcFilePath);
    transfer(srcFilePath, dstFilePath, param);
}


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


exports.default = main;