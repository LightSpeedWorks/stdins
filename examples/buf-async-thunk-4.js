require('stdins');

stdins.buf((err, buf) => err ?
	console.error(err) :
	console.log(buf.toString()));
