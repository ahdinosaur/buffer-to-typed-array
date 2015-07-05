var getDataType = require('dtype')
var toUint8 = require('buffer-to-uint8array')

module.exports = bufferToTypedArray

function bufferToTypedArray (dtype) {
  var TypedArray = getDataType(dtype)
  return function (buf) {
    return new TypedArray(toUint8(buf).buffer)
  }
}
    
