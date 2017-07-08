# [stdins](https://www.npmjs.com/package/stdins) - standard input string or buffer

process's standard input "stdin" with a string or a buffer.

## Prepare

```bash
$ npm install stdins --save
  or
$ npm i stdins -S
```

```js
require('stdins');
// and use global variable "stdins" or "stdinbuf".
```

## Usage

```bash
$ echo abc | node -r stdins -e "stdins(str => console.log(str))"
  or
$ echo abc | node -r stdins -e "stdins.then(str => console.log(str), err => console.error(err))"
$ echo abc | node -r stdins -e "stdins((err, str) => console.log(str, err))"
$ echo abc | node -r stdins -e "stdinbuf(buf => console.log(buf + ''))"
$ echo abc | node -r stdins -e "stdinbuf.then(buf => console.log(buf + ''), err => console.error(err))"
$ echo abc | node -r stdins -e "stdinbuf((err, buf) => console.log(buf + '', err))"
```

```js
require('stdins');

stdins(str => console.log(str));
// or
stdinbuf(buf => console.log(buf.toString()));
```

## Quick Examples

### `stdins()` async thunk with string

`stdins` is function, thunk, callable with callback.

callback's first argument receives a string.

```js
stdins(str => console.log(str));
```

callback's first argument receives an error, and
second argument receives a string.

```js
stdins((err, str) => err ?
  console.error(err) :
  console.log(str));
```

### `stdins.then()` async promise with string

`stdins` is promise, thenable.

resolved with a string.

```js
stdins.then(
  str => console.log(str),
  err => console.error(err));
```

### `stdinbuf()` async thunk with buffer

`stdins` is function, thunk, callable with callback.

callback's first argument receives a buffer.

```js
stdins.buf(buf => console.log(buf.toString()));
```

```js
stdinbuf(buf => console.log(buf.toString()));
```

callback's first argument receives an error, and
second argument receives a buffer.

```js
stdins.buf((err, buf) => err ?
  console.error(err) :
  console.log(buf.toString()));
```

```js
stdinbuf((err, buf) => err ?
  console.error(err) :
  console.log(buf.toString()));
```

### `stdinbuf.then()` async promise with buffer

`stdins` is promise, thenable.

resolved with a buffer.

```js
stdins.buf.then(
  buf => console.log(buf.toString()),
  err => console.error(err));
```

```js
stdinbuf.then(
  buf => console.log(buf.toString()),
  err => console.error(err));
```

## License

  MIT
