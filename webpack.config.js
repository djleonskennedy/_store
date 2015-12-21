var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, "src/js/main.js"),
	output: {
		path: path.resolve(__dirname, "/dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	devServer: {
		inline: true,
		contentBase: "./dist"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};