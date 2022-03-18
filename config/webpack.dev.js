'use strict'

require('regenerator-runtime/runtime')
require('colors')

const resolve = require('resolve')
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin')
const TypescriptFormatter = require('react-dev-utils/typescriptFormatter')
const Portfinder = require('portfinder')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base')
const utils = require('./utils')

const PORT = 8000
const IP = utils.getIPAdress()

const devWebpackConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  // 开发服务配置
  devServer: {
    host: '0.0.0.0',
    // port: PORT,
    publicPath: '/',
    disableHostCheck: true,
    useLocalIp: true,
    open: false,
    overlay: true,
    hot: true,
    stats: {
      assets: false,
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      entryoptions: false
    },
    historyApiFallback: true,
    proxy: {
      '/v1/': {
        target: 'http://172.29.139.32:8090',
        changeOrigin: true,
        pathRewrite: { '^': '' }
      },
      '/sys/v1/': {
        target: 'http://172.29.139.32:8090',
        changeOrigin: true,
        pathRewrite: { '^': '' }
      }
    }
  },
  plugins: [
    // ts检查插件
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: path.resolve(__dirname, '../node_modules')
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      resolveModuleNameModule: undefined,
      resolveTypeReferenceDirectiveModule: undefined,
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      reportFiles: [
        '**',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*'
      ],
      silent: false,
      formatter: TypescriptFormatter
    })
  ]
})

var s =
  '\n      ┏┛ ┻━━━━━┛ ┻┓\n      ┃　　　　　　 ┃\n      ┃　　　━　　　┃\n      ┃　┳┛　  ┗┳　┃\n' +
  '      ┃　　　　　　 ┃\n      ┃　　　┻　　　┃\n      ┃　　　　　　 ┃\n      ┗━┓　　　┏━━━┛\n        ┃　　　┃   神兽祝福\n' +
  '        ┃　　　┃   草泥马祝你通过关！\n        ┃　　　┗━━━━━━━━━┓\n        ┃　　　　　　　    ┣┓\n' +
  '        ┃　　　　         ┏┛\n        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛\n          ┃ ┫ ┫   ┃ ┫ ┫\n          ┗━┻━┛   ┗━┻━┛'

module.exports = new Promise((resolve, reject) => {
  Portfinder.basePort = PORT
  Portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          clearConsole: true,
          compilationSuccessInfo: {
            messages: [
              `${'欢迎来到PulanGo~'.rainbow}${
                '*⸜( •ᴗ• )⸝*'.green
              }。\n${s}\n你的项目在这里吼~ (╯‵□′)╯︵ http://${IP}:${port}
                    `
            ]
          },
          onErrors: utils.createNotifierCallback()
        })
      )
      resolve(devWebpackConfig)
    }
  })
})
