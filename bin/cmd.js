#!/usr/bin/env node
var faucet = require('../');
var opts = {
    width: process.stdout.isTTY ? process.stdout.columns : 0
};
process.stdin.pipe(faucet(opts)).pipe(process.stdout);
