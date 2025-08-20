---
title: "Comfort Accounting Application Documentation"
description: "Comfort Events index description."
keywords: "Comfort Events index keywords."
url: "/comfortevents/hooks-and-filters"
type: "type"
site_name: "Comfort ERP"
image: /seo_card.png
card: "article"

---
# Hooks and Filters

# Hooks and Filters Documentation for Comfort Events & Comfort Events Pro

## Comfort Events Plugin

### Action Hooks

1. **`comfortevent_event_delete_after`**
   - Triggered after a event is deleted.
   - **Parameters**:
     - `$event_id` (int): The ID of the deleted event.
     - `$event` (object): Deleted event data.
   - **Example**:
     ```php
     add_action( 'comfortevent_event_delete_after', function( $event_id, $event ) {
         // Custom logic after event deletion
     } );
     ```

2. **`comfortevent_event_created`**
   - Triggered when a event is created.
   - **Parameters**:
     - `$event` (object): The event object.
     - `$queryParams` (array): Request query params received in api.
     - `$source` (string): From where the api is called(frontent/backend).
   - **Example**:
     ```php
     add_action( 'comfortevent_event_created', function( $event, $queryParams, $source ) {
         // Custom logic for displaying a event section
     }, 10, 3 );
     ```

3. **`comfortevent_before_vuejs_mount_after`**
   - Triggered before Vue.js components are mounted.
   - **Example**:
     ```php
     add_action( 'comfortevent_before_vuejs_mount_after', function() {
         // Custom logic before Vue.js mount
     } );
     ```

4. **`comfortevent_after_main_content`**
   - Triggered after the main content of the event archive.
   - **Example**:
     ```php
     add_action( 'comfortevent_after_main_content', function() {
         // Add custom content after main content
     } );
     ```

---

### Filter Hooks

1. **`comfortevent_archive_title`**
   - Filters the title of the event archive.
   - **Parameters**:
     - `$title` (string): The archive title.
   - **Example**:
     ```php
     add_filter( 'comfortevent_archive_title', function( $title ) {
         return 'Custom Archive Title';
     } );
     ```

2. **`comfortevent_allowed_html_tags`**
   - Filters the allowed HTML tags for the plugin.
   - **Parameters**:
     - `$tags` (array): Allowed HTML tags.
   - **Example**:
     ```php
     add_filter( 'comfortevent_allowed_html_tags', function( $tags ) {
         $tags['div'] = [];
         return $tags;
     } );
     ```

3. **`comfortevent_event_js_translation`**
   - Filters the JavaScript translations for the plugin.
   - **Parameters**:
     - `$translations` (array): Translations for JavaScript.
   - **Example**:
     ```php
     add_filter( 'comfortevent_event_js_translation', function( $translations ) {
         $translations['custom_key'] = 'Custom Value';
         return $translations;
     } );
     ```

4. **`comfortevent_setting_js_vars`**
   - Filters the JavaScript variables used in settings.
   - **Parameters**:
     - `$vars` (array): JavaScript variables.
   - **Example**:
     ```php
     add_filter( 'comfortevent_setting_js_vars', function( $vars ) {
         $vars['custom_var'] = 'Custom Value';
         return $vars;
     } );
     ```

---

## Comfort Events Pro Plugin

### Action Hooks

1. **`comfortevent_invoice_print_header`**
   - Triggered when a invoice is created.
   - **Example**:
     ```php
     add_action( 'comfortevent_invoice_print_header', function() {
         // Custom logic for invoice header
     } );
     ```
2. **`comfortevent_invoice_print_footer`**
   - Triggered when a invoice is created.
   - **Example**:
     ```php
     add_action( 'comfortevent_invoice_print_footer', function() {
         // Custom logic for invoice footer
     } );
     ```

### Filter Hooks

5. **`comfortevent_email_classes`**
   - Filters the email classes used by the plugin.
   - **Parameters**:
     - `$classes` (array): Email classes.
   - **Example**:
     ```php
     add_filter( 'comfortevent_email_classes', function( $classes ) {
         $classes[] = 'CustomEmailClass';
         return $classes;
     } );
     ```

---

This documentation provides an overview of the available hooks and filters in the `Comfort Events` and `Comfort Events Pro` plugins. Use these to extend or customize the functionality as needed.









**Last modified:** August 20, 2025