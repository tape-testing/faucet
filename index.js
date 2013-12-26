var through2 = require('through2');
var duplexer = require('duplexer');
var parser = require('tap-parser');
var sprintf = require('sprintf');
var strip = require('strip-ansi');

module.exports = function (opts) {
    if (!opts) opts = {};
    var tap = parser();
    var out = through2();
    var test;
    
    var replaceLine = (function () {
        var prevWidth = 0;
        return function (str) {
            if (opts.width) str = str.slice(0, opts.width);
            var len = strip(str).length;
            var n = prevWidth - len;
            if (n < 0) n = 0;
            var s = str + Array(n + 1).join(' ');
            prevWidth = len;
            return '\r' + s;
        };
    })();
    
    tap.on('comment', function (comment) {
        if (test && test.ok) {
            var s = updateName(test.offset + 1, '✓ ' + test.name, 32);
            out.push('\r' + s);
        }
        
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
        var c = res.ok ? 32 : 31;
        var fmt = '  %s \x1b[1m\x1b[' + c + 'm%d\x1b[0m %s';
        var str = replaceLine(sprintf(fmt, ok, res.number, res.name));
        
        if (!res.ok) {
            var y = (++ test.offset) + 1;
            str += '\n';
            if (test.ok) {
                str += updateName(y, '⨯ ' + test.name, 31)
            }
            test.ok = false;
        }
        out.push(str);
        test.assertions.push(res);
    });
    
    tap.on('results', function (res) {
        if (!test.ok || /^fail\s+\d+$/.test(test.name)) {
            out.push(updateName(test.offset + 1, '⨯ ' + test.name, 31));
        }
        else {
            out.push(updateName(test.offset + 1, '✓ ' + test.name, 32));
        }
        out.push('\x1b[1G');
        out.push(null);
        
        dup.emit('results', res);
        if (!res.ok) dup.emit('fail');
        dup.exitCode = res.ok ? 0 : 1;
    });
    
    var dup = duplexer(tap, out);
    return dup;
    
    function showTest (test) {
        out.push('\r');
    }
};

function updateName (y, str, c) {
    return '\x1b[' + y + 'A'
        + '\x1b[1m\x1b[' + c + 'm'
        + str
        + '\x1b[0m'
        + '\x1b[' + y + 'B'
    ;
}
