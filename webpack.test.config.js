/*
* ES5 syntax only here...
* Rename the file to webpack.test.config.babel.js for ES6/7
*/
var webpack = require('webpack');
var fs = require('fs');
var testFiles = fs.readdirSync('./test').map(function (testFile) {
  return './test/' + testFile;
});

//Trick to not bundle node_modules and use them in node with require()
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
nodeModules['react/addons'] = 'commonjs react/addons';

module.exports = {
  entry: testFiles,
  target: 'node',

  output: {
    path: __dirname + '/dist',
    filename: 'test.bundle.js'
  },
  externals: nodeModules,
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ]
  },
};