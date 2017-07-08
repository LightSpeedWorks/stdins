require('stdins');

stdins.buf.then(
	buf => console.log(buf.toString()),
	err => console.error(err));
