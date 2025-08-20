---
title: "Comfort Events Documentation"
description: "Documentation for Comfort Events"
keywords: "Comfort Events index keywords."
url: "/event/user-guide/general"
type: "type"
site_name: "Comfort ERP"
image: "https://comforterp.com/assets/images/seo.png"
card: "article"

---

# Comfort Events User Guide

The Comfort Events plugin is designed to simplify event management within WordPress. It provides features for event listings, event builder related functionalities.

## File Structure

```
event/
├── assets/
│   ├── css/
│   ├── js/
│   ├── vendors/
├── includes/
│   ├── Api/
│   ├── Controllers/
│   ├── Helpers/
│   ├── Models/
│   ├── ComfortEvent.php
│   ├── ComfortEventAdmin.php
│   ├── ComfortEventHooks.php
│   ├── ComfortEventPublic.php
│   ├── ComfortEventShortcode.php
│   └── ComfortEventUninstall.php
├── templates/
│   ├── admin/
│   ├── emails/
│   ├── global/
│   ├── loop/
│   ├── event/
│   └── shortcodes/
├── comfortevents.php
└── readme.txt
```
## Key Files and Directories

- **assets/**: Contains CSS, JavaScript, and vendor files.
- **includes/**: Contains core PHP files for the plugin, including API routes, controllers, helpers, models, and main plugin classes.
- **templates/**: Contains template files for the plugin's frontend and admin views.
- **comfortevents.php**: The main plugin file that initializes the plugin.

### ComfortEvent

The main class for the plugin, located in `wp-content/plugins/comfortevents/includes/ComfortEvent.php`.

```php
class ComfortEvent {
    public static function instance() {
        // Returns the main instance of ComfortEvent.
    }

    public function __construct() {
        // Constructor method.
    }

    private function include_files() {
        // Includes necessary files.
    }
}
```
### ComfortEventAdmin
Handles the admin functionalities of the plugin, located in `ComfortEventAdmin.php`.

```php
<?php
class ComfortEventAdmin {
    public function create_menus() {
        // Creates admin menus.
    }

    public function display_event_listing_page() {
        // Displays the event listing page.
    }
}
```
### ComfortEventPublic
Handles the public-facing functionalities of the plugin, located in `ComfortEventPublic.php`.

```php
<?php
class ComfortEventPublic {
    public function enqueue_scripts() {
        // Enqueues public scripts and styles.
    }
}
```
### ComfortEventShortcode
Handles the public-facing functionalities of the plugin, located in `ComfortEventShortcode.php`.

```php
<?php
class ComfortEventShortcode {
    public function init_shortcode() {
        // Initializes shortcodes.
    }

    public function event_event_details_shortcode($atts) {
        // Handles the event details shortcode.
    }
}
```

### Event Details

To display event details, use the following shortcode:

```php
[comfortevent_event_details]
```

### Event Archive

To display a list of event listings, use the following shortcode:

```php
[comfortevent_event_archive]
```

### Event Dashboard

To display the event dashboard, use the following shortcode:

```php
[comfortevent_event_dashboard]
```

### Frontend Event Management

1. Create a new page in WordPress.
2. Add the `[comfortevent_event_manager]` shortcode to the page content.
3. Publish the page.
4. Users can now submit event listings from the frontend.


## Uninstallation

The uninstallation script is located in ComfortEventUninstall.php.

```php
<?php
ComfortEventUninstall::uninstall();
```