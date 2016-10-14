var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  node: { fs: 'empty' },
  context: path.join(__dirname),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './tests/frontend/test-index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
          test: /sinon\.js$/,
          loader: 'imports?define=>false,require=>false'
      }
    ],
  },
  externals: {
  'cheerio': 'window',
  'react/addons': true, // important!!
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
  },
  output: {
    path: __dirname,
    filename: '/tests/tests-bundle.js'
  },
  plugins: debug ? [] : [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
