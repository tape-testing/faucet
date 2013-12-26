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
        test = {
            name: comment,
            assertions: [],
            offset: 0,
            ok: true
        };
        out.push(replaceLine('# ' + comment) + '\n');
    });
    
    tap.on('assert', function (res) {
        var ok = res.ok ? 'ok' : 'not ok';
        var fmt = '%4d.  %s  %s';
        
        if (!res.ok) {
            var y = (++ test.offset) + 1;
            fmt += '\n';
            if (test.ok) {
                fmt += '\x1b[' + y + 'Ax\x1b[' + y + 'B';
            }
            test.ok = false;
        }
        var str = sprintf(fmt, res.number, ok, res.name);
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
