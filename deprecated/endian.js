var defined = require('defined')
var getDataType = require('dtype')
var getBufferTypeOp = require('btop')

module.exports = bufferToTypedArray

function bufferToTypedArray (opts) {
  var op = opts.op
  var dtype = defined(opts.dtype, 'uint8')
  var endian = defined(opts.endian, 'little')

  var read = getBufferTypeOp({
    op: 'read',
    dtype: dtype,
    endian: endian
  })
  var TypedArray = getDataType(dtype)
  var bytesPerElement = TypedArray.BYTES_PER_ELEMENT

  return function (buf) {
    if (!buf) { return undefined }

    // if already a typed array, ignore
    if (
      buf.constructor.name === TypedArray.name ||
      buf.constructor === TypedArray
    ) {
      return buf
    }

    // if a string, convert to buffer
    if (typeof buf == 'string') {
      buf = new Buffer(buf)
    }

    // if buffer length is incorrect number of bytes, error
    if (buf.length % bytesPerElement !== 0) {
      throw new Error("buffer.length % " + TypedArray.name + ".BYTES_PER_ELEMENT !== 0")
    }

    // convert to typed array
    var length = (buf.length / bytesPerElement)
    var array = new TypedArray(length)
    for (var i = 0; i < length; i++) {
      array[i] = buf[read](i)
    }
    return array
  }
}
