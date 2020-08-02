const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [ './index.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts' ],
	theme: {
		extend: {
			spacing: { 22: '88px', 23: '92px', ...defaultTheme.spacing },
			fontFamily: {
				sans: [ 'Inter var', ...defaultTheme.fontFamily.sans ]
			}
		}
	},
	plugins: [ require('@tailwindcss/ui') ]
};
