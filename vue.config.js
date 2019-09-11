const path = require('path');

module.exports = {
	lintOnSave: false,
	// chainWebpack: config => {
	//   config.resolve.alias
	//     .set('assets', path.resolve(__dirname, 'src/assets'))
	//     .set('node_modules', path.resolve(__dirname, 'node_modules'));
	// },
	configureWebpack: {
		resolve: {
			alias: {
				"src": path.resolve(__dirname, 'src'),	// ~/src
				"assets": path.resolve(__dirname, 'src/assets'),  // ~/assets
				"node_modules": path.resolve(__dirname, 'node_modules')  // ~/node_modules
			}
		},
		plugins: [
			//   new ImageminPlugin({
			//     test: 'src/assets/img/**',
			//     optipng: {
			//       optimizationLevel: 9
			//     },
			//     pngquant: {
			//       quality: 80
			//     },
			//     jpegtran: { 
			//       quiality: 80,
			//       progressive: true
			//     },
			//   })
		]
	},
	css: {
		modules: true,
		loaderOptions: {
			sass: {
				data: `
					@import "@/scss/parts/_helper.scss";
					`
			}
		}
	},
	chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}