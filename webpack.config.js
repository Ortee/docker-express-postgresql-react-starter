var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const PORT = process.env.PORT || 4000;

module.exports = {
  node: { fs: 'empty' },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: './frontend/js/app.js',
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style','css','sass'] ,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
    ]
  },
  output: {
    path: __dirname,
    filename: '/bundle.js'
  },
  plugins: debug ? [] : [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
