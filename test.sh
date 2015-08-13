#Set up a watch on test code. When change execute tests
chokidar "dist/testBundle.js" -c "npm run tape --silent" &
#Run webpack in watch mode to build test bundle
webpack --config webpack.test.config.js --watch