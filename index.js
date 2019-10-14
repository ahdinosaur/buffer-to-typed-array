var getDataType = require('dtype')

module.exports = bufferToTypedArray

function bufferToTypedArray (dtype) {
  var TypedArray = getDataType(dtype)
  return function (buf) {
    var n = Math.floor(buf.length / TypedArray.BYTES_PER_ELEMENT)
    return new TypedArray(buf.buffer, buf.byteOffset, n)
  }
}
