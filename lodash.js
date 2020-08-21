
function chunk(ary, size) {
  var result = []
  for (var i = 0; i < ary.length; i += size) {
    result.push(ary.slice(i, i + size))
  }
  return result
}

function slice() {}

exports.chunk = chunk
exports.slice = slice
