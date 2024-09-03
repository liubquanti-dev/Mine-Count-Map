import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mine Count',
  tagline: 'Безкоштовний публічний Minecraft сервер',
  favicon: 'img/favicon.png',

  url: 'https://map.mcount.fun',
  baseUrl: '/',

  organizationName: 'White-Heart-Dev',
  projectName: 'mine-count-map',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-background.png',
      navbar: {
        title: 'Mine Count Map',
        logo: {
          alt: 'Mine Count Logo',
          src: 'img/logo-small.png',
        },
        items: [
          {
            to: 'https://wiki.mcount.fun/',
            position: 'left',
            label: 'Вікі',
            target: '_self',
          },
          {
            to: 'https://wiki.mcount.fun/blog/',
            target: '_self',
            label: 'Блог',
            position: 'left'
          },
          {
						href: 'https://github.com/liubquanti-dev/Mine-Count-Site',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
