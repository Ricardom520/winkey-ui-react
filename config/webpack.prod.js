'use strict'

const { merge } = require('webpack-merge');
const TerseWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new TerseWebpackPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
    chunkIds: 'named',
    moduleIds: 'deterministic',
    splitChunks: {
      name: false,
      chunks: 'all',
      minChunks: 3,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vender',
          chunks: 'all',
          enforce: true
        },
        antd: {
          test: /antd?/,
          name: 'antd',
          priority: 10,
          chunks: 'initial',
          enforce: true
        },
        react: {
          test: /react|react-dom|mobx|prop-type|dva/,
          name: 'react',
          priority: 10,
          chunks: 'initial',
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '/assets/css/[name].[contenthash].css',
      chunkFilename: '/assets/css/[name].[contenthash].css'
    })
  ]
})