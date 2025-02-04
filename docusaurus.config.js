/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "4D Web Studio",
  tagline: "Quickly build web applications from your browser",
  url: "https://doc4d.github.io",
  baseUrl: "/4d-web-studio/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "doc4d", // Usually your GitHub org/user name.
  projectName: "4d-web-studio", // Usually your repo name.
  noIndex: true,
  themeConfig: {
    prism: {
      theme: require("./src/theme/highlight/themes/palenight"),
    },
    navbar: {
      hideOnScroll: true,
      title: "Web Studio (Preview)",
      logo: {
        alt: "4D Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "overview",
          label: "Docs",
        },
        {
          type: "doc",
          position: "left",
          docId: "API/web-event",
          label: "API",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "4D Blog",
              to: "https://blog.4d.com",
            },
            {
              label: "4D Forum",
              to: "https://discuss.4d.com",
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/4Dsoftware/",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/4Dsoftware",
            },
            {
              label: "Youtube",
              to: "https://www.youtube.com/user/4Dsoftware",
            },
            {
              label: "Github",
              to: "https://github.com/4D/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "4D Documentation",
              to: "https://developer.4d.com/docs/",
            },
            {
              label: "4D Doc Center (Legacy)",
              to: "https://doc.4d.com/",
            },
            {
              label: "Knowledge Base",
              to: "http://kb.4d.com/",
            },
            {
              label: "Downloads",
              to: "https://us.4d.com/product-download",
            },
            {
              label: "Resources",
              to: "https://us.4d.com/resources",
            },
            {
              label: "Get Support",
              to: "https://us.4d.com/4d-technical-support",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About 4D",
              to: "https://us.4d.com/about-us",
            },
            {
              label: "Contact us",
              to: "https://us.4d.com/contact-us",
            },
            {
              label: "4D around the world",
              to: "https://us.4d.com/4d-around-the-world",
            },
            {
              label: "Careers",
              to: "https://us.4d.com/careers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4D SAS - All rights reserved`,
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/4d/go-mobile/edit/main",
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
