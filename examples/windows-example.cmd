echo abc | node -r stdins -e "stdins(str => console.log(str))"
echo abc | node -r stdins -e "stdins.then(str => console.log(str), err => console.error(err))"
echo abc | node -r stdins -e "stdins((err, str) => console.log(str, err))"

echo abc | node -r stdins -e "stdinbuf(buf => console.log(buf + ''))"
echo abc | node -r stdins -e "stdinbuf.then(buf => console.log(buf + ''), err => console.error(err))"
echo abc | node -r stdins -e "stdinbuf((err, buf) => console.log(buf + '', err))"
echo abc | node -r stdins -e "stdins.buf(buf => console.log(buf + ''))"
echo abc | node -r stdins -e "stdins.buf.then(buf => console.log(buf + ''), err => console.error(err))"
echo abc | node -r stdins -e "stdins.buf((err, buf) => console.log(buf + '', err))"

echo abc | node  str-async-promise.js
echo abc | node  str-async-thunk-1.js
echo abc | node  str-async-thunk-2.js

echo abc | node  buf-async-promise-1.js
echo abc | node  buf-async-promise-2.js
echo abc | node  buf-async-thunk-1.js
echo abc | node  buf-async-thunk-2.js
echo abc | node  buf-async-thunk-3.js
echo abc | node  buf-async-thunk-4.js
