'use strict'

const path = require('path');
const CaseSensitivePathsplugin = require('case-sensitive-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const marked = require("marked");
const renderer = new marked.Renderer();

const getLessLoaderOptions = function({ cssModules = false }) {
  const lessLoaderOption = [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'less-loader',
      options: {
        sourceMap: true,
      }
    }
  ];

  return lessLoaderOption
}

module.exports = {
  entry: {
    index: ['react-hot-loader/patch'].concat([path.resolve(__dirname, '../src')])
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].js',
    sourceMapFilename: 'assets/js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    fallback: {
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
        // use: [
        //   {
        //       loader: "html-loader",
        //   },
        //   {
        //       loader: "markdown-loader",
        //       options: {
        //           /* your options here */
        //           pedantic: true,
        //           renderer
        //       }
        //   }
        // ]
      },
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, '../node_modules'),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")("last 100 versions")
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
            }
          }
        ] // 编译顺序从右到左
      },
      {
        test: /\.module\.less$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: getLessLoaderOptions({
          cssModules: true
        })
      },
      {
        test: /\b((?!module)\w)+\b\.less$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: getLessLoaderOptions({
          cssModules: true
        })
      },
      {
        test: /\.(svg|png|jpg|gif|ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 2 * 1024,
          outputPath: 'images',
          context: path.resolve(__dirname, '../src'),
          name: '[path][name].[ext]',
          esModule: false,
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // 强制执行所有必须模块的整个路径，匹配磁盘上实际路径的确切大小写，避免大小写问题引起的玛法
    new CaseSensitivePathsplugin(),
    // 进度条插件
    new WebpackBar(),
    // html插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: false
    })
  ]
}