module.exports = {
	lintOnSave: false,
	css: {
		modules: true,
		loaderOptions: {
			sass: {
				data: `
							@import "@/scss/_variables.scss";
							@import "@/scss/_mixins.scss";
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