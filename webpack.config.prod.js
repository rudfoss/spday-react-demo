const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appRoot = path.resolve(__dirname, 'src');
const distRoot = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index'
  },
  target: 'web',
  output: {
    path: distRoot,
    pathinfo: true,
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract([{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }])
      },
      {
        test: /\.global\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }])
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /(node_modules|\.global\.(css|scss|sass))/,
        use: ExtractTextPlugin.extract([{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]-[local]--[hash:base64:5]',
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }])
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: path.join(appRoot, 'index.ejs'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('styles/styles.css')
  ]
};