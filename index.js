const [DARWIN, GNU, WIN] = ['darwin', 'linux', 'win32']
const osdata = {
  [DARWIN]: 'darwin',
  [GNU]: 'gnu',
  [WIN]: 'win'
}
const os = require('os')
const osmain = os.platform()

const file_require = './index.' + osdata[osmain] + '.node'

const tr = require(file_require)

exports.random = function (start, end) {
  const i = tr.random(start, end)
  return i
}

exports.countspace = function (str) {
  return tr.cspace(str)
}
