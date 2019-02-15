const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const destinationPath = path.resolve(__dirname, '../.tmp');
const publicPath = path.resolve(destinationPath, './public');

module.exports.webpack = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../src/js/index.js')
  ],
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(ttf|eot|svg|png|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/public'),
        to: publicPath
      }
    ])
  ],
  parallelism: 4
};
