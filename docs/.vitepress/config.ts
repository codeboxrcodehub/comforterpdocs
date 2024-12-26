import dotenv from 'dotenv';
import { defineConfig, HeadConfig } from 'vitepress'

dotenv.config();

const base_url = process.env.VITEPRESS_BASE_URL || 'https://github.com/codeboxrcodehub/comforterpdocs';

export default {
  sitemap: {
    hostname: base_url
  },
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push(['meta', { property: 'keywords', content: pageData.frontmatter.keywords }]);


    head.push(['meta', { property: 'og:site_name', content: pageData.frontmatter.site_name }]);
    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }]);
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }]);
    head.push(['meta', { property: 'og:keywords', content: pageData.frontmatter.keywords }]);
    head.push(['meta', { property: 'og:type', content: pageData.frontmatter.type }]);
    head.push(['meta', { property: 'og:url', content: base_url + pageData.frontmatter.url }]);
    head.push(['meta', { property: 'og:image', content: pageData.frontmatter.image }]);

    head.push(['meta', { property: 'twitter:site', content: pageData.frontmatter.site_name }]);
    head.push(['meta', { property: 'twitter:title', content: pageData.frontmatter.title }]);
    head.push(['meta', { property: 'twitter:description', content: pageData.frontmatter.description }]);
    head.push(['meta', { property: 'twitter:keywords', content: pageData.frontmatter.keywords }]);
    head.push(['meta', { property: 'twitter:card', content: pageData.frontmatter.type }]);
    head.push(['meta', { property: 'twitter:url', content: base_url + pageData.frontmatter.url }]);
    head.push(['meta', { property: 'twitter:image', content: pageData.frontmatter.image }]);

    return head
  },
  title: "Comfort ERP",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  // cleanUrls: true,
  base: process.env.VITEPRESS_BASE || '/comforterpdocs/', // Default to '/' if the variable is not set
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      { text: "Accounting", link: "/comfortaccounting/" },
      //{ text: "Form", link: "/comfortform/" },
    ],
    //Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/codeboxrcodehub/comforterpdocs" },
      { icon: "twitter", link: "https://twitter.com/victorekea" },
      //{ icon: "discord", link: "..." },
      {
        icon: {
          svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
        },
        link: "https://google.com",
      },
    ],

    sidebar: {
      // Sidebar for `/docs/` section
      '/comfortaccounting/': [
        {
          text: 'Comfort Accounting',
          collapsible: false,
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: 'How to install', link: '/comfortaccounting/how-to-install' },
            { text: 'How to Translate', link: '/comfortaccounting/how-to-translate' },
            { text: 'Template Override', link: '/comfortaccounting/template-override' },
            { text: 'Hooks and Filters', link: '/comfortaccounting/hooks-and-filters' },
            { text: 'Code Samples', link: '/comfortaccounting/code-samples' },
          ],
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortaccounting/user-guide/general' },
            { text: 'Dashboard', link: '/comfortaccounting/user-guide/dashboard' },
            { text: 'Agency Manager', link: '/comfortaccounting/user-guide/agency-manager' },
            { text: 'Account Manager', link: '/comfortaccounting/user-guide/account-manager' },
            { text: 'Category Manager', link: '/comfortaccounting/user-guide/category-manager' },
            { text: 'VC Manager', link: '/comfortaccounting/user-guide/vc-manager' },
            { text: 'Log Manager', link: '/comfortaccounting/user-guide/log-manager' },
            { text: 'Reports Manager (Pro)', link: '/comfortaccounting/user-guide/reports-manager' },
            { text: 'Settings Manager', link: '/comfortaccounting/user-guide/settings-manager' },
            { text: 'Tools Manager', link: '/comfortaccounting/user-guide/tools-manager' },
            { text: 'Emails Manager', link: '/comfortaccounting/user-guide/emails-manager' },
            { text: 'Helps & Updates', link: '/comfortaccounting/user-guide/helps-updates' },
          ],
        },
        {
          text: 'Shortcode',
          collapsible: true,
          items: [
            { text: '7 Shortcodes', link: '/comfortaccounting/shortcodes' },
          ],
        },
        {
          text: 'Widgets',
          collapsible: true,
          items: [
            { text: 'Classic Widgets', link: '/comfortaccounting/classic-widgets' },
            { text: 'Elementor Widget', link: '/comfortaccounting/elementor-widgets' },
            { text: 'Gutenberg Blocks', link: '/comfortaccounting/gutenberg-blocks' },
          ],
        },
      ],
    
      // Sidebar for `/guide/` section
      // '/comfortform/': [
      //   {
      //     text: 'Comfort Form',
      //     collapsible: true,
      //     items: [
      //       { text: 'How to install', link: '/comfortform/how-to-install' },
      //       { text: 'How to Translate', link: '/comfortform/how-to-translate' },
      //       { text: 'Template Override', link: '/comfortform/template-override' },
      //       { text: 'Shortcodes', link: '/comfortform/shortcodes' },
      //       { text: 'Classic Widgets', link: '/comfortform/classic-widgets' },
      //       { text: 'Elementor Widget', link: '/comfortform/elementor-widgets' },
      //       { text: 'Gutenberg Blocks', link: '/comfortform/gutenberg-blocks' },
      //       { text: 'Hooks and Filters', link: '/comfortform/hooks-and-filters' },
      //       { text: 'Code Samples', link: '/comfortform/code-samples' },
      //     ],
      //   },
      // ],

     },
    // you can disable the previous and next page here
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    editLink: {
      pattern: 'https://github.com/codeboxrcodehub/comforterpdocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Comfort ERP",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
