var test = require('tape')
var getDataType = require('dtype')

var bufferToTypedArray

test('require module', function (t) {
  bufferToTypedArray = require('./')
  t.ok(bufferToTypedArray)
  t.equal(typeof bufferToTypedArray, 'function')
  t.end()
})


var examples = [
  { i: 'DEADBEEF', t: 'uint8',    o: [0xDE, 0xAD, 0xBE, 0xEF] },
  { i: 'DEADBEEF', t: 'uint16',   o: [0xADDE, 0xEFBE] },
  { i: 'DEADBEEF', t: 'uint32',   o: [0xEFBEADDE] },
]

test('convert buffers to typed arrays', function (t) {
  t.plan(examples.length)
  examples.forEach(function (example) {
    var input = example.i
    if (typeof input === 'string') { input = Buffer.from(input, 'hex') }
    var Constr = getDataType(example.t)
    var expectedValues = example.o
    var expectedTA = new Constr(expectedValues)
    var actual = bufferToTypedArray(example.t)(input)
    t.deepEqual(actual, expectedTA, Array.from(input) + " -> " + expectedValues)
  })
  t.end()
})
