module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'ShangShang.io',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'my portfolio site' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
		]
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: { color: '#3B8070' },
	/* modules */
	modules: ['@nuxtjs/vuetify'],
	/* css */
	css: [{ src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		extend(config, isDev) {
			if (isDev && process.client) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	vuetify: {
		theme: {
			primary: '#3f51b5',
			secondary: '#b0bec5',
			accent: '#8c9eff',
			error: '#b71c1c'
		}
	},
	router: {
		base: '/<repository-name>/'
	}
}
