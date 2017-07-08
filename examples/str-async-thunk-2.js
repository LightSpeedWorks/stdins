require('stdins');

stdins((err, str) => err ?
	console.error(err) :
	console.log(str));
