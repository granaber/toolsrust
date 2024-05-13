const [DARWIN, GNU, WIN, ARM64] = ['darwin', 'linux', 'win32', 'aarch64']
const osdata = {
  [DARWIN]: 'darwin',
  [GNU]: 'gnu',
  [WIN]: 'win',
  [ARM64]: 'aarch64'
}
const os = require('os')
const osmain = os.platform()
const isAppleSilicon = os.cpus()[0].model.includes('Apple')
const file_require = './index.' + (isAppleSilicon ? osdata[ARM64] : osdata[osmain]) + '.node'
console.log({ file_require, isAppleSilicon })
const tr = require(file_require)

exports.random = function (start, end) {
  const i = tr.random(start, end)
  return i
}

exports.countspace = function (str) {
  return tr.cspace(str)
}

// "build-cargo-darwin": "cargo-cp-artifact -nc index.darwin.node -- cargo build --target=x86_64-apple-darwin --message-format=json-render-diagnostics",
// "build-release-darwin": "npm run build-cargo-darwin -- --release",
// "build-debug-darwin": "npm run build-cargo-darwin --",
