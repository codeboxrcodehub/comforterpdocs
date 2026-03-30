---
title: "Template Override Guide for Comfort Accounting"
description: "Learn how to override Comfort Accounting templates to customize layouts and design. Complete guide for creating custom templates using child themes and WordPress template hierarchy."

ogType: "article"
ogTitle: "Template Override Guide for Comfort Accounting"
ogDescription: "Learn how to override Comfort Accounting templates to customize layouts and design. Complete guide for creating custom templates using child themes and WordPress template hierarchy."
ogSiteName: "Comfort ERP Documentation"
ogImage: "/comfort-accounting-accounting-solution-for-wordpress.webp"
ogUrl: "https://docs.comforterp.com/comfortaccounting/template-override"

twitterCard: "article"
twitterTitle: "Template Override Guide for Comfort Accounting"
twitterDescription: "Learn how to override Comfort Accounting templates to customize layouts and design. Complete guide for creating custom templates using child themes and WordPress template hierarchy."
twitterSite: "@ComfortERP"
twitterImage: "/comfort-accounting-accounting-solution-for-wordpress.webp"
twitterUrl: "https://docs.comforterp.com/comfortaccounting/template-override"

fbAppId: "1249182889483061"
keywords: "template override, custom templates, theme customization, override accounting templates, custom layouts, ERP template modification, WordPress template system, child theme setup, template hierarchy"
---

# How to Override Template

We have implemented woocommerce like template override system which means, you can override any template/view layer of this plugin in your theme. For this plugin, mainly admin interfaces of custom screens can be overridden. The frontend tour modals cannot be overridden as they load using JavaScript.

For core plugin: `wp-content/plugins/comfortaccounting/templates`

To override any file from your theme you have to create a folder called `comfortaccounting` inside your theme or child theme and copy files from the plugin’s template folder and put in this newly created folder inside your theme folder `comfortaccounting`. The process is same as the woocommerce theme file override.  


**Last modified:** December 9, 2024