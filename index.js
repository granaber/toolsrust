const tr = require('./index.node')

exports.random = function (start, end) {
  const i = tr.random(start, end)
  return i
}

exports.countspace = function (str) {
  return tr.cspace(str)
}
