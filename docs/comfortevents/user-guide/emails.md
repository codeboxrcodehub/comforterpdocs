---
title: "Comfort Events Documentation"
description: "Documentation for Comfort Events"
keywords: "comfort event, wordpress, wordpress event plugin, plugin"
url: "/comfortevents/user-guide/emails"
type: "type"
site_name: "Comfort ERP"
image: "https://comforterp.com/assets/images/seo.png"
card: "article"

---
# Email System

The Comfort Events plugin includes an email system to notify users about various events such as event application submissions, event approvals, and more.

#### Customizing Email Templates

1. Copy the desired email template file from `wp-content/plugins/comfortevents/templates/emails/` to your theme's directory, maintaining the folder structure.
2. Edit the copied template file as needed.

#### Available Email Templates
- **Sends notification to user on checkout**: `checkout_notification_to_user.php`
- **Sends notification to user on payment success**: `payment_success_to_user.php`
- **Sends notification to admin on payment success**: `payment_success_to_admin.php`
- **Sends notification to user on refund success**: `refund_success_to_user.php`
- **Sends notification to guest user email on event registration**: `guest_registration_to_user.php`
- **Sends verification email to guest user on event checkout**: `guest_event_checkout_to_user.php`
- **(pro) Sends invoice customer with details and attachments**: `invoice_send_to_customer_email.php`
- **(Pro) Sends notification to user/guest user to become member of an event**: `event-member-invitation.php`

### Single Email Settings

1. Go to `Comfort Events > Emails`.
2. Configure the following email settings:

   - **Subject**: The subject of the email.
   - **Email heading**: The heading of the email.
   - **Additional content**: The Additional content of the emails.
   - **From Name**: The name that will appear as the sender of the emails.
   - **From Email**: The email address that will appear as the sender of the emails.
   - **Admin Email**: The email address where admin notifications will be sent.
   - **CC/BCC**: The CC & BCC of the email.

3. Save changes.

