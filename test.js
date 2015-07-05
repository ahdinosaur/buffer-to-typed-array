var test = require('tape')
var getDataType = require('dtype')

var bufferToTypedArray

test('require module', function (t) {
  bufferToTypedArray = require('./')
  t.ok(bufferToTypedArray)
  t.equal(typeof bufferToTypedArray, 'function')
  t.end()
})

var fixtures = [
  ['uint8', [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09], [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09]]
]

test('convert buffers to typed arrays', function (t) {
  fixtures.forEach(function (fixture) {
    var fn = bufferToTypedArray(fixture[0])
    var i = new Buffer(fixture[1])
    var C = getDataType(fixture[0])
    var o = new C(fixture[2])
    t.deepEqual(fn(i), o, fixture[1] + " -> " + [].slice.call(o))
  })
  t.end()
})
