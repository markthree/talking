const { path } = require('@vuepress/utils')

module.exports = {
	base: '/talking/',
	lang: 'zh-CN',
	title: 'talking',
	description: '一些开发过程中的总结',
	themeConfig: {
		logo: 'logo.png',
		logoDark: 'logo-darked.png',
		lastUpdatedText: '更新时间',
		toggleDarkMode: '一天又过去了吗?',
		navbar: [
			{
				text: '组件库',
				link: '/components/'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/dishait/talking'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/dishait/talking'
			}
		],
		sidebarDepth: 10,
		sidebar: {
			'/components/': [
				{
					text: 'Components',
					children: ['/components/index.md']
				},
				{
					text: 'Core',
					children: ['/components/core/shouldCore.md']
				}
			]
		}
	},
	plugins: [
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(
					__dirname,
					'../../components'
				)
			}
		]
	],
	alias: {
		'/h5': path.resolve(__dirname, './public/h5'),
		'@design': path.resolve(__dirname, '../../design')
	},
	head: [['link', { rel: 'icon', href: '/logo.png' }]],
	theme: path.resolve(__dirname, './theme'),
	themePlugins: {
		backToTop: true
	}
}
