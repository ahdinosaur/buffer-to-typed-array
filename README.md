# buffer-to-typed-array

converts [`Buffer`](https://nodejs.org/docs/latest/api/buffer.html)s to [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)s.

**stability: unstable. lacks adaquate tests.**

## install

with [npm](http://npmjs.org), do:

```
npm i --save buffer-to-typed-array
```

## usage

```
var toTypedArray = require('buffer-to-typed-array');
var toInt16LE = toTypedArray({
  dtype: 'int16',
  endian: 'little'
})
var buf = new Buffer([0x01, 0x02, 0x03, 0x04])
var arr = toInt16LE(buf)
```

## license

ISC
