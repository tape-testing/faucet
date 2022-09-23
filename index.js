'use strict';

var through2 = require('through2');
var duplexer = require('duplexer');
var parser = require('tap-parser');
var sprintf = require('sprintf-js').sprintf;
var forEach = require('array.prototype.foreach');
var join = require('array.prototype.join');
var map = require('array.prototype.map');
var push = require('array.prototype.push');
var slice = require('array.prototype.slice');
var split = require('string.prototype.split');
var trim = require('string.prototype.trim');
var regexTester = require('safe-regex-test');

var isPassing = regexTester(/^(tests|pass)\s+\d+$/);
var isFailing = regexTester(/^fail\s+\d+$/);

module.exports = function (opts) {
	var tap = parser();
	var out = through2();

	function trimWidth(s, ok) {
		if (opts && opts.width && s.length > opts.width - 2) {
			var more = ok ? 0 : 4;
			return slice(s, 0, opts.width - 5 - more) + '...';
		}
		return s;
	}

	function updateName(y, str, c) {
		return '\x1b[' + y + 'A\x1b[1G\x1b[1m\x1b[' + c + 'm' + trimWidth(str) + '\x1b[0m\x1b[' + y + 'B\x1b[1G';
	}

	var test;

	tap.on('comment', function (comment) {
		if (comment === 'fail 0') { return; } // a mocha thing

		if (
			test
			&& test.ok
			&& test.assertions.length === 0
			&& isPassing(test.name)
		) {
			out.push('\r' + trimWidth(test.name));
		} else if (test && test.ok) {
			var s = updateName(test.offset + 1, '✓ ' + test.name, 32);
			out.push('\r' + s);
		}

		test = {
			name: comment,
			assertions: [],
			offset: 0,
			ok: true
		};
		out.push('\r' + trimWidth('# ' + comment) + '\x1b[K\n');
	});

	tap.on('assert', function (res) {
		var ok = res.ok ? 'ok' : 'not ok';
		var c = res.ok ? 32 : 31;
		if (!test) {
			// mocha produces TAP results this way, whatever
			var s = trimWidth(trim(res.name));
			out.push(sprintf(
				'\x1b[1m\x1b[' + c + 'm%s\x1b[0m\n',
				trimWidth((res.ok ? '✓' : '⨯') + ' ' + s, res.ok)
			));
			return;
		}

		var fmt = '\r  %s \x1b[1m\x1b[' + c + 'm%d\x1b[0m %s\x1b[K';
		var str = sprintf(fmt, ok, res.number, res.name);

		if (!res.ok) {
			var y = ++test.offset + 1;
			str += '\n';
			if (test.ok) {
				str += updateName(y, '⨯ ' + test.name, 31);
			}
			test.ok = false;
		}
		out.push(str);
		push(test.assertions, res);
	});

	tap.on('extra', function (extra) {
		if (!test || test.assertions.length === 0) { return; }
		var last = test.assertions[test.assertions.length - 1];
		if (!last.ok) {
			out.push(join(
				map(
					split(extra, '\n'),
					function (line) { return '  ' + line; }
				),
				'\n'
			) + '\n');
		}
	});

	var dup = duplexer(tap, out);

	tap.on('results', function (res) {
		if (test && isFailing(test.name)) {
			out.push(updateName(test.offset + 1, '⨯ ' + test.name, 31));
		} else if (test && test.ok) {
			out.push(updateName(test.offset + 1, '✓ ' + test.name, 32));
		}

		forEach(res.errors, function (err, ix) {
			out.push(sprintf(
				'not ok \x1b[1m\x1b[31m%d\x1b[0m %s\n',
				ix + 1 + res.asserts.length,
				err.message
			));
		});

		if (!res.ok && !isFailing(test && test.name)) {
			out.push(sprintf(
				'\r\x1b[1m\x1b[31m⨯ fail  %s\x1b[0m\x1b[K\n',
				(res.errors.length + res.fail.length) || ''
			));
		}

		out.push(null);

		dup.emit('results', res);
		if (!res.ok) { dup.emit('fail'); }
		dup.exitCode = res.ok ? 0 : 1;
	});

	return dup;
};
