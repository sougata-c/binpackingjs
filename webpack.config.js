const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let libraryName = 'BinPacking', plugins = [], outputFile;
const env = process.env.WEBPACK_ENV;

if (env === 'build') {
  plugins.push(new UglifyJSPlugin({
  	sourceMap: true
  }));
  outputFile = `[name].min.js`;
} else {
  outputFile = `[name].js`;
}

module.exports = {
	context: __dirname + "/src",
  entry: {
    BP2D: './2D',
    BP3D: './3D',
  },
  output: {
    path: __dirname + "/dist",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true    
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: plugins
}