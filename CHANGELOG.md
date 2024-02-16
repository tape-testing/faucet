# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v0.0.4](https://github.com/tape-testing/faucet/compare/v0.0.3...v0.0.4) - 2023-02-04

### Commits

- [Deps] update `array.prototype.foreach`, `array.prototype.join`, `array.prototype.map`, `array.prototype.push`, `array.prototype.slice`, `string.prototype.split`, `string.prototype.split`, `tape` [`84d8f72`](https://github.com/tape-testing/faucet/commit/84d8f722901a469a2024a0d690c04a5fa2d62fa0)
- [actions] update checkout action [`8e5332d`](https://github.com/tape-testing/faucet/commit/8e5332dfe2f71d202019bfb311505eebaa67b868)
- [Fix] downgrade `tap-parser` to v0.7.0 [`79c3ff2`](https://github.com/tape-testing/faucet/commit/79c3ff21ba079c1505c59f3dd6ae6d40f956d84a)
- [Dev Deps] update `@ljharb/eslint-config`, `aud` [`42d4d86`](https://github.com/tape-testing/faucet/commit/42d4d8655ee330be6ab6f06c98253f9ce2d63f13)
- [Deps] update `defined`, `minimist` [`5ea8305`](https://github.com/tape-testing/faucet/commit/5ea83059497a14487e33506e283a18f8dc69da39)

## [v0.0.3](https://github.com/tape-testing/faucet/compare/v0.0.2...v0.0.3) - 2022-09-22

### Commits

- [Fix] use `readable-stream` to fix tests in node &lt; 1 [`358d919`](https://github.com/tape-testing/faucet/commit/358d91982823a7528c0e1887423189229206a183)
- [Deps] update `tap-parser` [`fa1ee37`](https://github.com/tape-testing/faucet/commit/fa1ee378ebd9d07aded6e74a8df8a32bf3290465)
- [Deps] update `defined` [`43a11c4`](https://github.com/tape-testing/faucet/commit/43a11c49c602abcd45f277362bd0e55c47473acd)

## [v0.0.2](https://github.com/tape-testing/faucet/compare/0.0.1...v0.0.2) - 2022-09-22

### Merged

- remove excess line [`#1`](https://github.com/tape-testing/faucet/pull/1)

### Commits

- [eslint] add `npm run lint` [`4399c97`](https://github.com/tape-testing/faucet/commit/4399c978f624e33d0020d347afefcb44ff1eb0da)
- [meta] finish spaces -&gt; tabs [`8a62fc5`](https://github.com/tape-testing/faucet/commit/8a62fc5496c999dd1d8d739a9f138a7b6febd8b2)
- Trim too long assert messages to prevent line overflow [`f88d449`](https://github.com/tape-testing/faucet/commit/f88d4498083fbb4bd0af8084a442da2a1548448e)
- [actions] add reusable workflows [`51df79a`](https://github.com/tape-testing/faucet/commit/51df79a00954855e6c0c5fbc1d463f289b995278)
- [meta] add `auto-changelog` [`7a01dd6`](https://github.com/tape-testing/faucet/commit/7a01dd6b5113712b18178b88719b79afaf67122c)
- [Robustness] use `string.prototype.trim`, `array.prototype.foreach`, `array.prototype.push` [`edcea74`](https://github.com/tape-testing/faucet/commit/edcea74078a6d1b5176105ac542b9881fbd5f722)
- [meta] standardize license text [`0d4aa82`](https://github.com/tape-testing/faucet/commit/0d4aa82331c46590e0745a4f4d305eb5e29bf4e7)
- [Robustness] revert non-array `.push` changes from edcea74 [`7694712`](https://github.com/tape-testing/faucet/commit/7694712bddb1628e7acbc8bb90a4e4934edf1cb8)
- [Robustness] use `array.prototype.join`, `array.prototype.map`, `string.prototype.split`, `array.prototype.slice` [`555e2f6`](https://github.com/tape-testing/faucet/commit/555e2f626d374d5777e57b1948bdc154449e7bcb)
- [meta] add `sideEffects` flag, `funding`, `FUNDING.yml` [`a653c28`](https://github.com/tape-testing/faucet/commit/a653c2808a05db0ea713d0cd27047cba7f9a4516)
- [Robustness] use `safe-regex-test` [`418c79e`](https://github.com/tape-testing/faucet/commit/418c79e9bb881db1c3d9e3896252bb89a98733fe)
- [meta] use `npmignore` to autogenerate an npmignore file [`5b18ec4`](https://github.com/tape-testing/faucet/commit/5b18ec4c48131a34b90f9e4cf0b0c76ad6e41690)
- [Refactor] use `npm-which` to locate `tape` binary [`0a9bd16`](https://github.com/tape-testing/faucet/commit/0a9bd163386078b9bcee9f815c4da69205ca2476)
- [Deps] update `duplexer`, `sprintf`, `tap-parser` [`6a8765c`](https://github.com/tape-testing/faucet/commit/6a8765c7176726edc8a0d9e0f26442f8fdc29a28)
- [Deps] update `tape` [`f3ca01e`](https://github.com/tape-testing/faucet/commit/f3ca01e0a707eb8b0fcfd91c1bfb13ac9a8fc815)
- Only apps should have lockfiles [`d4559ca`](https://github.com/tape-testing/faucet/commit/d4559ca1649f3707aefcb70a6d6bbce92bb0a12f)
- [Fix] make tests pass [`90a49a2`](https://github.com/tape-testing/faucet/commit/90a49a29e41748b8e405604aed096d1daca753c7)
- [meta] add `safe-publish-latest` [`d5d2f41`](https://github.com/tape-testing/faucet/commit/d5d2f41163902f637465f89bcfe3661e0f871d4c)
- [breaking] add "exports" [`2f159b1`](https://github.com/tape-testing/faucet/commit/2f159b1b9e97468c2b1fd7aa3b781c7bfe77f990)
- [Refactor] use non-depreacted `sprintf-js` successor instead of `sprintf` [`1671ad5`](https://github.com/tape-testing/faucet/commit/1671ad570c24f10232f56edb42f260c3ff30d84d)
- [Deps] update `minimist` [`0994d21`](https://github.com/tape-testing/faucet/commit/0994d2153726dbc587518fc86ff282ddabcc5dbe)

## [0.0.1](https://github.com/tape-testing/faucet/compare/0.0.0...0.0.1) - 2014-02-17

### Commits

- trim test names [`9bf4aaf`](https://github.com/tape-testing/faucet/commit/9bf4aaf1b04a801f1df3dce30bb94ccd770dd7d3)
- install instructions [`1e7a4f9`](https://github.com/tape-testing/faucet/commit/1e7a4f99d3d42a339acaed317eb3ceadf116ddd9)
- throw away EPIPE [`47a33b1`](https://github.com/tape-testing/faucet/commit/47a33b178ceb2b03ac33a63feafc23c61a56f245)

## 0.0.0 - 2013-12-26

### Commits

- generating tap, more examples [`085e600`](https://github.com/tape-testing/faucet/commit/085e6002832253d00e0c413511d32fd3ea3a4c65)
- basic thing just prints the results [`863eba9`](https://github.com/tape-testing/faucet/commit/863eba9a129ed3cde27de5b2b40f9b0e3c7f5212)
- shell out to tape, check for files in test/ and tests/ [`87bc1e8`](https://github.com/tape-testing/faucet/commit/87bc1e84aab8a9a1f4c45236bc970bfeca17476b)
- basic line replacement [`654d6c2`](https://github.com/tape-testing/faucet/commit/654d6c2af22e3da3190f4261c4f1cf7ba277d922)
- factored out name updating [`b86b7da`](https://github.com/tape-testing/faucet/commit/b86b7da64a1e15862a2bce9228fbbee89c76b117)
- hacks for mocha tap formatting [`1e629ea`](https://github.com/tape-testing/faucet/commit/1e629eac5199ce8475397e1c10d96999bf76d279)
- passing green checkmarks too [`18daeba`](https://github.com/tape-testing/faucet/commit/18daebad899eb31fd01d84f9c84e67bb3ba69124)
- skip back to mark a test as failed [`526ebe8`](https://github.com/tape-testing/faucet/commit/526ebe8ca0f757db7ef099b098c4f6b2a54e710b)
- using \x1b[K, no need for strip-ansi anymore [`2d4d2e3`](https://github.com/tape-testing/faucet/commit/2d4d2e3cea6dfb0c6f1d392c293317ef70fa9dc6)
- show error results and append a fail message [`6195366`](https://github.com/tape-testing/faucet/commit/6195366992262f4cb635cbcbce311f3414b1e3cc)
- show extra lines of output after failed assertions [`ed4227a`](https://github.com/tape-testing/faucet/commit/ed4227a7175b001ee3bcb68ec6ce2ea65cc587cc)
- set the exit code properly [`9f28030`](https://github.com/tape-testing/faucet/commit/9f28030068a947ebf2d87a51e5fe40584ed29858)
- mocha example gif [`1ce0210`](https://github.com/tape-testing/faucet/commit/1ce021017f258416f62b37701487ce9d32888be9)
- always show errors, fix bug reseting the column to pos 1 [`40b5d8a`](https://github.com/tape-testing/faucet/commit/40b5d8a0b85ce2da6494d01f2c6f733a5c5cb5ff)
- show `not ok` messages in the final output [`5c56275`](https://github.com/tape-testing/faucet/commit/5c56275a76207241dd667d99eaca4c8e4e8ebe58)
- show tests and pass lines without decoration [`14c67c6`](https://github.com/tape-testing/faucet/commit/14c67c612b28ba8c4e06a8c51262cce3eba02110)
- update the last test accordingly [`9f67b8e`](https://github.com/tape-testing/faucet/commit/9f67b8e458dd00d943e321f266fa61b603a57f32)
- guard against 0 tests [`6edd8a2`](https://github.com/tape-testing/faucet/commit/6edd8a2519e009d60cbb529251921d3f2819d6db)
- example test gif output [`10f6b6c`](https://github.com/tape-testing/faucet/commit/10f6b6cc923a3287afc6e8d133eb0985a45cae7d)
- no actual tests for now [`400137e`](https://github.com/tape-testing/faucet/commit/400137e560b29f75a50391309c4481afa38a2f26)
- another hack for mocha to hide the `fail 0` [`8a603ac`](https://github.com/tape-testing/faucet/commit/8a603ac6e063ce62b7e0c411b4a53a40df6b8ac0)
- more terse example output [`f28d234`](https://github.com/tape-testing/faucet/commit/f28d234d1f131e3b54fd4e8b7d26941de3adbddb)
