var babylon = require("babylon");
var fs = require("fs");

function getFullAst(src, option) {
    option = option || {
            sourceType: "module"
        }
    return babylon.parse(src + "", option)
}

function getAstWithoutLoc() {

}

var oldPath = "./srcOld.js";
var newPath = "./srcNew.js";
var oldDstPath = "./dstOld.js";
var newDstPath = "./dstNew.js";
var oldContent = fs.readFileSync(oldPath, "utf8");
var newContent = fs.readFileSync(newPath, "utf8");

var oldDst = getFullAst(oldContent);
var newDst = getFullAst(newContent);


fs.writeFile(oldDstPath,  parseStr(oldDst));
fs.writeFile(newDstPath, parseStr(newDst));


function parseStr(obj) {
    var src = JSON.stringify(obj);
    src = "var a = " + src;
    return src;
}
//
// exports.getFullAst = getFullAst;
// exports.getAstWithoutLoc = getAstWithoutLoc;