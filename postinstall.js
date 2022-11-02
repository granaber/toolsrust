const os = require('os')
const fs = require('fs')
const path = require('path')
const { exit } = require('process')

const osmain = os.platform()

const [DARWIN, GNU, WIN] = ['darwin', 'linux', 'win32']
const osdelete = {
  [DARWIN]: ['gnu', 'win'],
  [GNU]: ['darwin', 'win'],
  [WIN]: ['darwin', 'gnu']
}
const path_install = require.resolve('toolrust')
const directory = path.dirname(path_install)

const listfilerm = osdelete[osmain]
for (const o of listfilerm) {
  console.log('/index.' + o + '.node')
  const file = path.join(directory, '/index.' + o + '.node')
  fs.unlinkSync(file)
}
