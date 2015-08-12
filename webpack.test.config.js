/*
* ES5 syntax only here...
* Rename the file to webpack.config.babel.js for ES6/7
*/
var webpack = require('webpack');
var fs = require('fs');
var entryArray = fs.readdirSync('./test').map(function(testFile){
                      return './test/' + testFile;
                  });

module.exports = {
	devtool: 'source-map',
  target: 'node',
    entry: entryArray,
    output: {
        path: __dirname + "/dist",
        filename: "testBundle.js"
    },
    plugins: [
    	new webpack.NoErrorsPlugin()
    ],
    module: {
   		loaders: [
   			{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    	]
  	}
};