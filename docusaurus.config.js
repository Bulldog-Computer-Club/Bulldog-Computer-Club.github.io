module.exports = {
	title: 'Bulldog Computer Club',
	tagline: 'A chill club for everything programming related',
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
					remarkPlugins: [import('remark-math')],
					rehypePlugins: [import('rehype-katex')],
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
					docId: 'introduction',
					position: 'left',
					label: 'Introduction',
				},
				{
					type: 'doc',
					docId: 'ccc/introduction',
					position: 'left',
					label: 'CCC',
				},
				{
					href: 'https://github.com/bulldog-computer-club/',
					className: 'header-github-link',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Resources',
					items: [
						{
							label: 'CCC',
							to: '/docs/ccc/introduction',
						},
					],
				},
				{
					title: 'Community',
					items: [],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub Organization',
							href: 'https://github.com/bulldog-computer-club',
						},
						{
							label: 'Website Repository',
							href: 'https://github.com/bulldog-computer-club/bulldog-computer-club.github.io',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Bulldog Computer Club.`,
		},
		prism: {
			darkTheme: require('prism-react-renderer/themes/vsDark'),
			theme: require('prism-react-renderer/themes/vsLight'),
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
