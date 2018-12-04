"use strict";
exports.__esModule = true;
var fs = require('fs');
var check = require('syntax-error');
function checkError() {
    var file = __dirname + '/app.js';
    var src = fs.readFileSync(file);
    var err = check(src, file);
    if (err) {
        console.error('ERROR DETECTED' + Array(62).join('!'));
        console.error(err);
        console.error(Array(76).join('-'));
    }
}
exports["default"] = checkError;
//# sourceMappingURL=log-error.js.map