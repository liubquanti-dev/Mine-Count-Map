import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mine Count',
  tagline: 'Безкоштовний публічний Minecraft сервер',
  favicon: 'img/favicon.png',

  url: 'https://mcountmap.liubquanti.click',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Mine Count',
        logo: {
          alt: 'Mine Count Logo',
          src: 'img/logo-small.png',
          href: 'https://mcount.liubquanti.click/',
          target: '_self',
        },
        items: [
          {
            to: 'https://mcountwiki.liubquanti.click/',
            position: 'left',
            label: 'Вікі',
            target: '_self',
          },
          {
            to: 'https://mcountwiki.liubquanti.click/blog/',
            target: '_self',
            label: 'Блог',
            position: 'left'
          },
          {
            to: '/',
            target: '_self',
            label: 'Мапа',
            position: 'left'
          },
          {
            to: 'http://89.35.49.83:19199/',
            label: 'Мапа не працює?',
            position: 'right'
          },
          {
						href: 'https://stats.uptimerobot.com/NowpAIVNnk',
						className: 'navbar-item-uptimerobot',
						position: 'right',
					},
          {
						href: 'https://github.com/liubquanti-dev/Mine-Count-Map',
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
