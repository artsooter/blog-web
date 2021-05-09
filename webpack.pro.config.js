/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = (env)=> {
  const { analysis }  = env
  const morePlugins=analysis==='true'?new BundleAnalyzerPlugin():[]
  return Object.assign({}, config, {
    mode: 'production',
    devtool: false,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ].concat(morePlugins)
  });
}

