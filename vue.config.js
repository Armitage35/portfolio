// This file disables lint-on-save errors blocking the dev server for Vue CLI
module.exports = {
	lintOnSave: 'warning', // Show lint errors as warnings, do not block rendering
	chainWebpack: (config) => {
		config.module
			.rule('scss')
			.oneOf('normal')
			.use('sass-loader')
			.tap((options) => {
				return {
					...options,
					sassOptions: {
						...options.sassOptions,
						silenceDeprecations: ['legacy-js-api'],
					},
				};
			});
	},
};
