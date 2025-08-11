# EmailJS Setup Guide

## Problem
The contact form is not working because EmailJS environment variables are not configured. The send button gets stuck on "Sending..." and emails are not sent.

## Solution

### Step 1: Create a .env file
Create a `.env` file in the root directory of your project with the following content:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 2: Set up EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. After signing up, go to your dashboard

### Step 3: Get Your Service ID
1. In EmailJS dashboard, go to "Email Services"
2. Add a new service (Gmail, Outlook, etc.)
3. Copy the Service ID

### Step 4: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Create a new template
3. Use this template content:
```
Hello {{to_name}},

You have received a new message from {{from_name}} ({{from_email}}):

{{message}}

Best regards,
{{from_name}}
```
4. Copy the Template ID

### Step 5: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

### Step 6: Update .env file
Replace the placeholder values in your `.env` file with your actual credentials:

```
VITE_APP_EMAILJS_SERVICE_ID=service_abc123
VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_APP_EMAILJS_PUBLIC_KEY=user_public_key_here
```

### Step 7: Restart Development Server
After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing
Once configured, the contact form should work properly:
- The send button will show "Send" when ready
- When clicked, it will show "Sending..." briefly
- After successful send, you'll get a confirmation message
- The form will be cleared after successful submission

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Ensure your EmailJS account is active
- Verify that your email service is properly connected in EmailJS dashboard
