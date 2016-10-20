var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  node: { fs: 'empty' },
  context: path.join(__dirname),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './frontend/js/app.js',
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style','css','sass'] ,
        exclude: /(node_modules)/,
        include: path.join(__dirname, '/')
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
      { test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
          test: /\.(woff|woff2|eot|ttf)$/i,
          loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=images/[name]-[hash].[ext]'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '/bundle.js'
  },
  plugins: debug ? []:[
   new webpack.HotModuleReplacementPlugin(),
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
 ],
};
