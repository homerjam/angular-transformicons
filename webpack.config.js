var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/angular-transformicons.js',
  output: {
    library: 'AngularTransformicons',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'angular-transformicons.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015']
      },
      {
        test: /\.hbs$/,
        loaders: ['raw']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'autoprefixer?{browsers:["last 2 versions", "ios >= 6", "safari >= 5", "ie >= 9"]}', 'sass?sourceMap']
      }
    ]
  }
};
