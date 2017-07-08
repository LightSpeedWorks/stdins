require('stdins');

stdinbuf((err, buf) => err ?
	console.error(err) :
	console.log(buf.toString()));
