/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.config.js');

module.exports = Object.assign({}, config, {
  mode: 'development',
  devtool: 'eval-source-map', // 用于让代码报错的时候，能指向原始错误文件
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]
});

