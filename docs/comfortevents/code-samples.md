---
title: "Comfort Accounting Application Documentation"
description: "Comfort Events index description."
keywords: "Comfort Events index keywords."
url: "/comfortevents/code-samples"
type: "type"
site_name: "Comfort ERP"
image: /seo_card.png
card: "article"
---
# Code Samples

## Creating a New Event
```php
<?php
// Create a new event using the Eloquent model
use Comfort\Event\Models\Event;

$event = new Event();
$event->title = 'My New Event';
$event->start_date = '2025-09-01 10:00:00';
$event->end_date = '2025-09-01 18:00:00';
$event->status = 'published';
$event->save();
```
## Getting Event Listing
```php
<?php
// Get a paginated list of events
use Comfort\Event\Helpers\ComfortEventHelpers;

$filters = [
    'limit' => 5,
    'order_by' => 'start_date',
    'sort' => 'asc',
];
$events = ComfortEventHelpers::eventListing($filters);
```
## Getting a Single Event by ID
```php
<?php
// Get event details by ID
use Comfort\Event\Helpers\ComfortEventHelpers;

$event_id = 123;
$event = ComfortEventHelpers::getEvent($event_id);
```
## Creating a Page with Shortcode
```php
<?php
// Create a page with the event manager shortcode
ComfortEventHelpers::create_page(
    'event_manager_page',
    'event-manager',
    'Event Manager',
    '[comfortevent_event_manager]'
);
```
## Getting Allowed HTML Tags
```php
<?php
// Get allowed HTML tags for output sanitization
$allowed_tags = ComfortEventHelpers::allowedHtmlTags();
```
## Getting Country List for Select Field
```php
<?php
// Get country list for a select field
$countries = ComfortEventHelpers::countryListForTreeSelect();
```
## Getting User Roles
```php
<?php
// Get user roles including guest
$user_roles = ComfortEventHelpers::user_roles(true, true);
```
## Getting Event Statuses
```php
<?php
// Get all event statuses
$statuses = ComfortEventHelpers::event_statuses();
```

# Comfort Events Pro – Code Samples

## Export Invoice as PDF
```php
<?php
// Export invoice as PDF for download
Comfort\EventPro\Helpers\EventProHelpers::invoice_pdf_export_as_download($exportData);
```
## Export Invoice as String
```php
<?php
// Export invoice as PDF string
Comfort\EventPro\Helpers\EventProHelpers::invoice_pdf_export_as_string($exportData);
```
## Export Attendee Columns for Excel
```php
<?php
// Get attendee export columns for Excel
Comfort\EventPro\Helpers\EventProHelpers::attendee_export_cols();
```
## Add Custom Email Classes
```php
<?php
// Add custom email classes for event member invitation and invoice
add_filter('comfortevent_email_classes', [$misc, 'extends_event_emails']);
```
## Add Custom Payment Classes
```php
<?php
// Add Stripe payment class
add_filter('comfortevent_payment_classes', [$misc, 'extends_event_payments']);
```
## Export Event Attendees (Admin)
```php
<?php
// Export event attendees from admin area
Comfort\EventPro\ComfortEventProAdmin::admin_attendee_listing_export();
```

**Last modified:** August 20, 2025