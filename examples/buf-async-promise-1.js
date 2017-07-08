require('stdins');

stdinbuf.then(
	buf => console.log(buf.toString()),
	err => console.error(err));
