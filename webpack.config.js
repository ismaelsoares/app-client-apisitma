var webpack = require('webpack');
var path = require('path');
var WebpackHtmlPlugin = require('webpack-html-plugin');
var WebpackHtmlConfig = new WebpackHtmlPlugin({
  template: './src/index.html',
  inject: 'body',
  filename: 'index.html'
});

module.exports = {
    entry: './src/index.js',
    context: __dirname,
    devServer:{
      outputPath: './dist'
  },

  outputPath:{
    path: './build',
    filename: 'bundle.js'
  },

  module:{
    loaders:[{
      test: /\.js$|\.jsx$/,
      loader: 'babel-loader',
      exclude: './node_modules',
    }]
  },

  resolve:{
    extensions:['', '.js', '.jsx']
  },

  plugins: [WebpackHtmlConfig]

};
