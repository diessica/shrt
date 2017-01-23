'use strict'

const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: isProduction
      ? [ './app/main.js' ]
      : [ 'webpack/hot/only-dev-server', './app/main.js' ]
  },

  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.css$/, loader: 'style?sourceMap!css?sourceMap' }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/helpers/template.html',
      hash: true
    })
  ],

  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://gymia-shorty.herokuapp.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    host: 'localhost',
    port: 3030,
    contentBase: path.resolve(__dirname, 'static')
  },

  devtool: 'cheap-module-eval-source-map'
}
