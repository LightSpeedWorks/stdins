'use strict';

var called = false;

var str = '';
function stdins(res, rej) {
	if (called) throw new Error('do not call 2nd time');
	called = true;
	process.stdin
		.setEncoding('utf8')
		.on('data', function (s) { str += s; })
		.on('end', function () {
			res.length >= 2 ? res(null, str) : res(str); })
		.on('error', rej || res)
		.resume();
}

var list = [];
function stdinbuf(res, rej) {
	if (called) throw new Error('do not call 2nd time');
	called = true;
	process.stdin
		.on('data', function (buf) { list.push(buf); })
		.on('end', function () {
			var buf = Buffer.concat(list);
			res.length >= 2 ? res(null, buf) : res(buf); })
		.on('error', rej || res)
		.resume();
}

stdinbuf.then = function (res, rej) {
	return new Promise(stdinbuf).then(res, rej);
};

stdins.buf = global.stdinbuf = stdinbuf;

stdins.then = function (res, rej) {
	return new Promise(stdins).then(res, rej);
};

module.exports = global.stdins = stdins;
