var buf = ''; // var list = [];
var thunk = function (res, rej) {
	process.stdin
		.setEncoding('utf8')
		//.on('data', function (buf) { list.push(buf); })
		.on('data', function (str) { buf += str; })
		.on('end', function () {
			// var buf = Buffer.concat(list);
			res.length >= 2 ?
				res(null, buf) :
				res(buf); })
		.on('error', rej || res)
		.resume();
};
thunk.then = thunk;
module.exports = global.stdins = thunk;
