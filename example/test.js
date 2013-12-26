var test = require('tape');
function getMessage () {
    var msgs = [ 'yes', 'equals', 'matches', 'yep', 'pretty much', 'woo' ];
    return msgs[Math.floor(Math.random() * msgs.length)];
}

test('beep', function (t) {
    t.plan(24);
    var i = 0, n = 0;
    var iv = setInterval(function () {
        t.equal(i++, n++, getMessage());
        if (i === 24) clearInterval(iv);
    }, 50);
});

test('boop', function (t) {
    t.plan(20);
    var i = 0, n = 0;
    var iv = setInterval(function () {
        t.equal(i++, n++, getMessage());
        if (i === 20) clearInterval(iv);
    }, 100);
});
