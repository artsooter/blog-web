const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GetRouterPlugins = require('./src/plugin/router');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js', // 输出文件
    path: path.resolve(__dirname, 'dist'), // 输出文件地址
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      plugin: path.resolve(__dirname, 'src/plugin/'),
    },
  },
  externals: {
    jquery: 'jQuery',
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
    shineout: 'Shineout',
  },
  devServer: {
    hot: true,
    contentBase: './dist',
  },
  plugins: [
    new GetRouterPlugins({ options: true }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: './index.html',
      cache: true,
    }),
  ],
  module: { // 添加新的规则的时候，如果loader解析有问题，可以试试用npm webpack重新打包（来自url-loader的坑）
    rules: [// 规则添加

      {
        test: /\.(jx|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { // 添加对于css样式文件的识别和解析
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      { // 添加对于less样式文件的识别和解析
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      {
        test: /\.(png|jpg)$/,
        use: { loader: 'url-loader', options: { limit: 10000000 } },
      },

      {
        test: /worker\.js$/,
        use: { loader: 'worker-loader' },
      },
      {
        test: /\.(jx|jsx)$/,
        use: {
          loader: path.resolve(__dirname, 'src/loader/router.js'),
        },
        exclude: /node_modules/,
      },
    ],
  },
};
