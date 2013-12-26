#!/usr/bin/env node
var faucet = require('../');
process.stdin.pipe(faucet()).pipe(process.stdout);
