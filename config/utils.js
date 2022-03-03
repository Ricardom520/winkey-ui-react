const notifier = require('node-notifier')
const os = require('os')
const packageConfig = require('../package.json')

exports.getIPAdress = function () {
  const interfaces = os.networkInterfaces()

  for (const devName in interfaces) {
    const iface = interfaces[devName]

    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]

      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

exports.createNotifierCallback = function () {
  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + '：' + error.name,
      subtitle: filename || ''
    })
  }
}

exports.createCNM = function () {
  const str =
    '\r      ┏┛ ┻━━━━━┛ ┻┓\r      ┃　　　　　　 ┃\r      ┃　　　━　　　┃\r      ┃　┳┛　  ┗┳　┃\r' +
    '      ┃　　　　　　 ┃\r      ┃　　　┻　　　┃\r      ┃　　　　　　 ┃\r      ┗━┓　　　┏━━━┛\r        ┃　　　┃   神兽祝福\r' +
    '        ┃　　　┃   草泥马祝你通过关！\r        ┃　　　┗━━━━━━━━━┓\r        ┃　　　　　　　    ┣┓\r' +
    '        ┃　　　　         ┏┛\r        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛\r          ┃ ┫ ┫   ┃ ┫ ┫\r          ┗━┻━┛   ┗━┻━┛'

  for (let i = 0; i < str.length; i++) {
    console.log(str.i)
  }
}
