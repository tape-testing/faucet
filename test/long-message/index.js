'use strict';

var test = require('tape');
var Readable = require('readable-stream');
var path = require('path');
var fs = require('fs');
var faucet = require('../..');

function createFormatter() {
	return faucet({ width: 80 });
}

function streamifyString(string) {
	function read() {
		/* eslint no-invalid-this: 0 */
		this.push(string);
		this.push(null);
	}
	return new Readable({
		_read: read,
		read: read
	});
}

function stringifyStream(theStream, callback) {
	var output = '';
	theStream.on('data', function (chunk) {
		output += chunk;
	}).on('end', function () {
		callback(output);
	});
}

function getFilePath(name) {
	return path.join(__dirname, name + '.tap');
}

function checkFormatting(t, name, expectedExcerpt) {
	var tapString = fs.readFileSync(getFilePath(name), 'utf-8');
	var formattedStream = streamifyString(tapString).pipe(createFormatter());
	stringifyStream(formattedStream, function (actualOutput) {
		var contains = actualOutput.indexOf(expectedExcerpt) > 0;

		t.ok(contains, 'Looking for "' + expectedExcerpt + '" in the "' + name + '" input.');

		t.end();
	});
}

test('A long successful assertion message should be cut.', function (t) {
	checkFormatting(t, 'succeeded', 'should start with "Unrecogn');
});

test('A long failed assertion message should be cut.', function (t) {
	checkFormatting(t, 'failed', 'should start with "Unre');
});
