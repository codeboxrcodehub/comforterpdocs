import dotenv from 'dotenv';
//import { defineConfig, HeadConfig } from 'vitepress'

dotenv.config();

const base_url = process.env.VITEPRESS_BASE_URL || 'https://github.com/codeboxrcodehub/comforterpdocs';

export default {
  sitemap: {
    hostname: base_url
  },
  /*transformHead: ({ pageData }) => {
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
  },*/
  title: "Comfort ERP Documentation",
  description: "Documentation for Comfort ERP plugins",
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
      { text: "Invoice", link: "/comfortinvoice/" },
      { text: "Bookings", link: "/comfortbookings/" },
    ],
    //Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/codeboxrcodehub/comforterpdocs" },
      //{ icon: "twitter", link: "https://twitter.com/victorekea" },
      //{ icon: "discord", link: "..." },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>',
        },
        link: "https://comforterp.com",
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

      '/comfortinvoice/': [
        {
          text: 'Comfort Invoice',
          collapsible: false,
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: 'How to install', link: '/comfortinvoice/how-to-install' },
            { text: 'How to Translate', link: '/comfortinvoice/how-to-translate' },
            { text: 'Template Override', link: '/comfortinvoice/template-override' },
            { text: 'Hooks and Filters', link: '/comfortinvoice/hooks-and-filters' },
            { text: 'Code Samples', link: '/comfortinvoice/code-samples' },
          ],
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortinvoice/user-guide/general' },
            { text: 'Dashboard', link: '/comfortinvoice/user-guide/dashboard' },
            { text: 'Invoice Manager', link: '/comfortinvoice/user-guide/invoice-manager' },
            { text: 'Customer Manager', link: '/comfortinvoice/user-guide/customer-manager' },
            { text: 'Item Manager', link: '/comfortinvoice/user-guide/item-manager' },
            { text: 'Tax Manager', link: '/comfortinvoice/user-guide/tax-manager' },
            { text: 'Payment History Manager', link: '/comfortinvoice/user-guide/payment-history-manager' },
            { text: 'Settings Manager', link: '/comfortinvoice/user-guide/settings-manager' },
            { text: 'Tools Manager', link: '/comfortinvoice/user-guide/tools-manager' },
            { text: 'Emails Manager', link: '/comfortinvoice/user-guide/emails-manager' },
            { text: 'Helps & Updates', link: '/comfortinvoice/user-guide/helps-updates' },
          ],
        },
        {
          text: 'Widgets',
          collapsible: true,
          items: [
            { text: 'Dashboard Widgets', link: '/comfortinvoice/dashboard-widgets' },
            { text: 'Classic Widgets', link: '/comfortinvoice/classic-widgets' },
            { text: 'Elementor Widget', link: '/comfortinvoice/elementor-widgets' },
            { text: 'Gutenberg Blocks', link: '/comfortinvoice/gutenberg-blocks' },
          ],
        },
      ],

      '/comfortbookings/': [
        {
          text: 'Comfort Bookings',
          collapsible: false,
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: 'How to install', link: '/comfortbookings/how-to-install' },
            { text: 'How to Translate', link: '/comfortbookings/how-to-translate' },
            { text: 'Template Override', link: '/comfortbookings/template-override' },
            { text: 'Hooks and Filters', link: '/comfortbookings/hooks-and-filters' },
            { text: 'Code Samples', link: '/comfortbookings/code-samples' },
          ],
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortbookings/user-guide/general' },
            { text: 'Dashboard', link: '/comfortbookings/user-guide/dashboard' },
            { text: 'Appointment Type Manager', link: '/comfortbookings/user-guide/type-manager' },
            { text: 'Meeting & Booking Manager', link: '/comfortbookings/user-guide/meeting-booking-manager' },
            { text: 'Settings Manager', link: '/comfortbookings/user-guide/settings-manager' },
            { text: 'Tools Manager', link: '/comfortbookings/user-guide/tools-manager' },
            { text: 'Emails Manager', link: '/comfortbookings/user-guide/emails-manager' },
            { text: 'Helps & Updates', link: '/comfortbookings/user-guide/helps-updates' },
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
