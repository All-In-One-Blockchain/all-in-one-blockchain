// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: section,
      path: `docs/${section}`,
      routeBasePath: section,
      include: ['**/*.md', '**/*.mdx'],
      breadcrumbs: false,
      sidebarPath: require.resolve('./sidebars.cjs'),
      editUrl: 'https://github.com/All-In-One-Blockchain/all-in-one-solana/edit/main',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('awesome-blockchain-zh'),
  defineSection('arbitrum-layer2'),
  defineSection('solana'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'All in One BlockChain',
  tagline: 'Power by Rustycab',
  url: 'https://www.all-in-one-blockchain.xyz/',
  baseUrl: '/all-in-one-blockchain',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'All-In-One-Blockchain', // Usually your GitHub org/user name.
  projectName: 'all-in-one-solana', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://all-in-one-solana.github.io/all-in-one-solana/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    path.resolve(__dirname, './plugins/webpack-plugin.cjs'),
    path.resolve(__dirname, './plugins/tailwind-loader.cjs'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'All In One BlockChain',
        logo: {
          alt: 'Logo',
          src: 'img/my_logo.svg',
        },
        items: [
          {
            href: '/awesome-blockchain-zh',
            position: 'left',
            label: 'Awesome BlockChain Zh',
          },
          {
            href: '/solana',
            position: 'left',
            label: 'Solana Develop Guide',
          },
          {
            href: '/arbitrum-layer2',
            position: 'left',
            label: 'Arbitrum',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/All-In-One-Blockchain/all-in-one-blockchain.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Forum',
                href: 'https://github.com/All-In-One-Blockchain/all-in-one-blockchain/discussions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/92B7aka3qr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SolanaCreators',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/All-In-One-Blockchain',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All in One Solana site, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // Additional languages can be added here.
        additionalLanguages: ['powershell', 'rust', 'toml', 'yaml', 'c', 'cpp'],
      },
    }),
};

module.exports = config;
