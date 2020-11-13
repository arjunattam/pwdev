module.exports = {
  title: 'Playwright',
  tagline: 'Fast and reliable end-to-end testing for modern web apps',
  url: 'https://arjunattam.github.io',
  baseUrl: '/pwdev/',
  onBrokenLinks: 'log',
  favicon: 'img/playwright-logo.svg',
  organizationName: 'arjunattam', // Usually your GitHub org/user name.
  projectName: 'pwdev', // Usually your repo name.
  scripts: ['js/redirection.js'],
  themeConfig: {
    navbar: {
      title: 'Playwright',
      logo: {
        alt: 'Playwright logo',
        src: 'img/playwright-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'api/playwright-module',
          label: 'API',
          position: 'left',
        },
        {
          to: 'blog', label: 'Blog', position: 'right'
        },
        {
          href: 'https://github.com/microsoft/playwright',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],

          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/intro',
            },
            {
              label: 'API reference',
              to: 'docs/api/playwright-module',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/playwright',
            },
            {
              label: 'Slack',
              href: 'https://aka.ms/playwright-slack',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/playwrightweb',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/microsoft/playwright',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    },
    algolia: {
      apiKey: 'c85f496c6eea71808027d42111ac550c',
      indexName: 'playwright',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
