#!/usr/bin/env node
var faucet = require('../');
var tap = faucet({
    width: process.stdout.isTTY ? process.stdout.columns : 0
});
process.on('exit', function (code) {
    if (code === 0 && tap.exitCode !== 0) {
        process.exit(tap.exitCode);
    }
});
process.stdin.pipe(tap).pipe(process.stdout);
