// @ts-check
const math = require('remark-math');
const katex = require('rehype-katex');
const { themes } = require('prism-react-renderer');

/** @returns {Promise<import('@docusaurus/types').Config>} */
async function createConfig() {
	return {
		title: 'Bulldog Computer Club',
		tagline: 'The premier club for everything related to computer science at Churchill',
		url: 'https://bulldog-computer-club.github.io',
		baseUrl: '/',
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'img/favicon.ico',
		organizationName: 'bulldog-computer-club',
		projectName: 'bulldog-computer-club.github.io',
		trailingSlash: false,
		presets: [
			[
				'@docusaurus/preset-classic',
				{
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						editUrl: 'https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/',
						remarkPlugins: [math],
						rehypePlugins: [katex],
					},
					blog: false,
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
				},
			],
		],
		themeConfig: {
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: 'Bulldog Computer Club',
				logo: {
					alt: 'Bulldog Computer Club Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: '2023-24/welcome',
						position: 'left',
						label: '2023-24 Guides',
					},
					{
						href: 'https://github.com/bulldog-computer-club/',
						className: 'header-github-link',
						position: 'right',
					},
				],
			},
			prism: {
				darkTheme: themes.vsDark,
				theme: themes.vsLight,
				additionalLanguages: ['java'],
			},
		},
		stylesheets: [
			{
				href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
				integrity: 'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
				crossorigin: 'anonymous',
			},
		],
	};
}

module.exports = createConfig;
