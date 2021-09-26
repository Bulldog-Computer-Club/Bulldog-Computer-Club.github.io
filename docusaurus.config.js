module.exports = {
	title: 'SWC Programming Club',
	tagline: 'An community of programmers of all skill levels working to help one another.',
	url: 'https://swc-programming-club.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'swc-programming-club',
	projectName: 'swc-programming-club.github.io',
	trailingSlash: false,
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/swc-programming-club/swc-programming-club.github.io/edit/main/',
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
			title: 'SWC Programming Club',
			logo: {
				alt: 'SWC Programming Club Logo',
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
					docId: 'beginner-resources/introduction',
					position: 'left',
					label: 'Beginner Resources',
				},
				{
					type: 'doc',
					docId: 'advanced-resources/introduction',
					position: 'left',
					label: 'Advanced Resources',
				},
				{
					type: 'doc',
					docId: 'meetings/introduction',
					position: 'left',
					label: 'Meetings',
				},
				{
					href: 'https://github.com/swc-programming-club/',
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
							label: 'Beginner Resources',
							to: '/docs/beginner-resources/introduction',
						},
						{
							label: 'Advanced Resources',
							to: '/docs/advanced-resources/introduction',
						},
						{
							label: 'Meetings',
							to: '/docs/meetings/introduction',
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
							href: 'https://github.com/swc-programming-club',
						},
						{
							label: 'Website Repository',
							href: 'https://github.com/swc-programming-club/swc-programming-club.github.io',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} SWC Programming Community.`,
		},
		prism: {
			darkTheme: require('prism-react-renderer/themes/vsDark'),
			theme: require('prism-react-renderer/themes/vsLight'),
		},
	},
};
