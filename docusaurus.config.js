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
					remarkPlugins: [require('remark-math')],
					rehypePlugins: [require('rehype-katex')],
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
			switchConfig: {
				darkIcon: '🌙',
				lightIcon: '☀️',
			},
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
					docId: 'gamedev/introduction',
					position: 'left',
					label: 'Gamedev',
				},
				{
					type: 'doc',
					docId: 'linux/introduction',
					position: 'left',
					label: 'Linux',
				},
				{
					type: 'doc',
					docId: 'ccc/introduction',
					position: 'left',
					label: 'CCC',
				},
				{
					type: 'doc',
					docId: 'meetings/information',
					position: 'left',
					label: 'Meetings',
				},
				{
					href: 'https://github.com/bulldog-computer-club/',
					label: 'GitHub',
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
							label: 'Gamedev',
							to: '/docs/gamedev/introduction',
						},
						{
							label: 'Linux',
							to: '/docs/linux/introduction',
						},
						{
							label: 'CCC',
							to: '/docs/ccc/introduction',
						},
						{
							label: 'Meetings',
							to: '/docs/meetings/information',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Discord',
							href: 'https://discord.gg/qEp5jFYV',
						},
					],
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
