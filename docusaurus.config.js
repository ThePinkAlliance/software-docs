// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "The Pink Alliance",
	tagline: "Flamingos are cool.",
	url: "https://thePinkAlliance.github.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/logo.ico",
	organizationName: "thePinkAlliance", // Usually your GitHub org/user name.
	projectName: "software-docs", // Usually your repo name.
	trailingSlash: false,

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/thePinkAlliance/software-docs/tree/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/thePinkAlliance/software-docs/tree/main/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: "The Pink Alliance",
				logo: {
					alt: "Pink Alliance Logo",
					src: "img/logo.jpeg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Docs",
					},
					{
						href: "https://github.com/thePinkAlliance",
						label: "GitHub",
						position: "left",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Into",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/yan4h97sUq",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/pinkalliance233",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/thePinkAlliance",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} The Pink Team, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				defaultLanguage: "java",
			},
		}),
};

module.exports = config;
