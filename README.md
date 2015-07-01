# buffer-to-typed-array

stability: experimental. expect the unexpected.

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

check out [tests](https://github.com/livejs/buffer-to-typed-array/blob/master/test.js)

## license

ISC
