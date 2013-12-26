var through2 = require('through2');
var duplexer = require('duplexer');
var parser = require('tap-parser');

module.exports = function () {
    var tap = parser();
    var out = through2();
    
    tap.on('results', function (res) {
        console.log(res);
    });
    return duplexer(tap, out);
};
