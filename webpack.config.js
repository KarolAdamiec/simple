/*
* ES5 syntax only here...
* Rename the file to webpack.config.babel.js for ES6/7
*/
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
    entry: ['webpack/hot/dev-server','./index'],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
    ],
    module: {
   		loaders: [
   			{ test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
    	]
  	}
};