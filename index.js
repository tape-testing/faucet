var through2 = require('through2');
var duplexer = require('duplexer');
var parser = require('tap-parser');
var sprintf = require('sprintf');

module.exports = function (opts) {
    if (!opts) opts = {};
    var tap = parser();
    var out = through2();
    var test;
    
    var replaceLine = (function () {
        var prevWidth = 0;
        return function (str) {
            if (opts.width) str = str.slice(0, opts.width);
            var n = prevWidth - str.length;
            if (n < 0) n = 0;
            var s = str + Array(n + 1).join(' ');
            prevWidth = str.length;
            return '\r' + s;
        };
    })();
    
    tap.on('comment', function (comment) {
        test = { name: comment, assertions: [] };
        out.push(replaceLine(comment) + '\n');
    });
    
    tap.on('assert', function (res) {
        var ok = res.ok ? '  ok' : '  not ok';
        var fmt = '%s %3d %s';
        var str = sprintf(fmt, ok, res.number, res.name);
        out.push(replaceLine(str));
        test.assertions.push(res);
    });
    
    tap.on('result', function (res) {
        // 
    });
    
    return duplexer(tap, out);
    
    function showTest (test) {
        out.push('\r');
    }
};
