#!/usr/bin/env node

'use strict';

var faucet = require('../');
var minimist = require('minimist');
var defined = require('defined');
var which = require('npm-which');

var tapeCmd = process.env.FAUCET_TAP_CMD || which.sync('tape', { cwd: process.cwd() });

var spawn = require('child_process').spawn;
var fs = require('fs');
var path = require('path');

var regexTester = require('safe-regex-test');
var jsFile = regexTester(/\.js$/i);

var faucetArgs = [];
var opts = [];
faucetArgs.forEach(function (arg) {
    if (arg.length > 1 && arg.charAt(0) === '-') {
        opts.push(arg);
    } else {
        faucetArgs.push(arg);
    }
});
var argv = minimist(faucetArgs);

var tap = faucet({
	width: defined(argv.w, argv.width, process.stdout.isTTY
		? process.stdout.columns - 5
		: 0)
});
process.on('exit', function (code) {
	if (code === 0 && tap.exitCode !== 0) {
		process.exit(tap.exitCode);
	}
});
process.stdout.on('error', function () {});

if (!process.stdin.isTTY || argv._[0] === '-') {
	process.stdin.pipe(tap).pipe(process.stdout);
	return;
}

var files = argv._.reduce(function (acc, file) {
	if (fs.statSync(file).isDirectory()) {
		return acc.concat(fs.readdirSync(file).map(function (x) {
			return path.join(file, x);
		}).filter(jsFile));
	}
	return acc.concat(file);
}, []);

if (files.length === 0 && fs.existsSync('test')) {
	files.push.apply(files, fs.readdirSync('test').map(function (x) {
		return path.join('test', x);
	}).filter(jsFile));
}
if (files.length === 0 && fs.existsSync('tests')) {
	files.push.apply(files, fs.readdirSync('tests').map(function (x) {
		return path.join('tests', x);
	}).filter(jsFile));
}

if (files.length === 0) {
	console.error('usage: `faucet [FILES]` or `| faucet`\n');
	console.error('No test files or stdin provided and no files in test/ or tests/ directories found.');
	process.exit(1);
}

var tapeArgs = opts.concat(files);
var tape = spawn(tapeCmd, tapeArgs);
tape.stderr.pipe(process.stderr);
tape.stdout.pipe(tap).pipe(process.stdout);

var tapeCode;
tape.on('exit', function (code) { tapeCode = code; });
process.on('exit', function (code) {
	if (code === 0 && tapeCode !== 0) {
		console.error('# non-zero exit from the `tape` command');
		process.exit(tapeCode);
	}
});
