# Lead Alerts Setup Guide

## 🚨 Automated Lead Alerts - Contact Leads Within 30 Minutes!

This guide will help you set up instant email and WhatsApp notifications when a new lead submits the form.

---

## ✅ Quick Setup (Email Alerts - REQUIRED)

### Step 1: Update Your Email Address

1. Open your Google Apps Script (Extensions → Apps Script in your Google Sheet)
2. Find this line in the code:
   ```javascript
   const YOUR_EMAIL = 'YOUR_EMAIL_HERE';
   ```
3. Replace `'YOUR_EMAIL_HERE'` with your actual email address
   - Example: `const YOUR_EMAIL = 'yourname@gmail.com';`
4. **Save** the script (Ctrl+S or Cmd+S)

### Step 2: Redeploy the Script

1. Click **Deploy** → **Manage deployments**
2. Click the **pencil icon** (edit) next to your current deployment
3. Click **New version**
4. Click **Deploy**
5. The URL stays the same - no need to update contact.html

### Step 3: Test It!

1. Submit a test form on your website
2. Check your email - you should receive an alert within seconds!
3. The email will contain all lead information

---

## 📱 Optional: WhatsApp Alerts Setup

If you want WhatsApp notifications in addition to email, follow these steps:

### Option A: Using Twilio (Recommended)

**Step 1: Create Twilio Account**
1. Go to [twilio.com](https://www.twilio.com)
2. Sign up for a free account (includes $15.50 credit)
3. Verify your phone number

**Step 2: Get WhatsApp Sandbox Access**
1. In Twilio Console, go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. Follow instructions to join the sandbox (send a code to Twilio's WhatsApp number)
3. Once in sandbox, you can send/receive WhatsApp messages

**Step 3: Get Your Credentials**
1. In Twilio Console, go to **Account** → **API Keys & Tokens**
2. Copy your **Account SID** and **Auth Token**

**Step 4: Get WhatsApp Number**
1. In Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. Or use the sandbox number provided (format: `whatsapp:+14155238886`)

**Step 5: Update Apps Script**
1. Open your Apps Script
2. Find these lines and update them:
   ```javascript
   const TWILIO_ACCOUNT_SID = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID
   const TWILIO_AUTH_TOKEN = 'your_auth_token_here'; // Your Auth Token
   const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Twilio WhatsApp number
   const YOUR_WHATSAPP_NUMBER = 'whatsapp:+1234567890'; // Your WhatsApp number
   ```
3. **Save** and **redeploy** (same steps as email setup)

**Step 6: Test WhatsApp**
1. Submit a test form
2. Check your WhatsApp - you should receive a message!

---

## 📧 Email Alert Format

You'll receive emails with this format:

**Subject:** 🚨 NEW LEAD: [Name] from [Company]

**Body:**
- All lead information (name, email, company, role, challenge, message)
- Timestamp of submission
- Quick action reminder to contact within 30 minutes

---

## 📱 WhatsApp Alert Format

You'll receive WhatsApp messages with:
- Lead name and company
- Email address
- Main challenge
- Reminder to contact within 30 minutes

---

## ⚡ Speed = Higher Closing Rate

**Why 30 minutes matters:**
- Leads are most engaged immediately after submitting
- Response time directly impacts conversion rate
- Automated alerts ensure you never miss a lead

**Best Practices:**
1. ✅ Set up email alerts (takes 2 minutes)
2. ✅ Check email notifications on your phone
3. ✅ Reply to leads within 30 minutes
4. ✅ Optional: Add WhatsApp for instant mobile alerts

---

## 🔧 Troubleshooting

### Email Not Working?
- ✅ Check that YOUR_EMAIL is updated (not 'YOUR_EMAIL_HERE')
- ✅ Check your spam folder
- ✅ Make sure the script is saved and redeployed
- ✅ Check Apps Script execution log (View → Logs)

### WhatsApp Not Working?
- ✅ Verify Twilio credentials are correct
- ✅ Make sure you're in Twilio WhatsApp sandbox
- ✅ Check phone number format: `whatsapp:+1234567890`
- ✅ Check Twilio console for error messages
- ✅ Verify you have Twilio credits

### No Alerts Received?
- ✅ Check Apps Script execution log
- ✅ Make sure script is deployed (not just saved)
- ✅ Test with a real form submission
- ✅ Check that email/WhatsApp credentials are correct

---

## 💡 Pro Tips

1. **Multiple Email Recipients**: You can add multiple emails by modifying the `sendLeadAlert` function
2. **Customize Alert Format**: Edit the email/WhatsApp message templates to match your style
3. **Add SMS Alerts**: Similar to WhatsApp, you can add SMS via Twilio
4. **Slack Integration**: You can also send alerts to Slack channels
5. **Calendar Reminders**: Automatically create calendar events for follow-ups

---

## 📊 Expected Results

After setup:
- ✅ Instant email alerts when form is submitted
- ✅ All lead information in one place
- ✅ 30-minute response reminder
- ✅ Higher conversion rates from faster response times

---

## 🎯 Next Steps

1. ✅ Set up email alerts (5 minutes)
2. ✅ Test with a real submission
3. ✅ Optional: Add WhatsApp alerts (15 minutes)
4. ✅ Start responding to leads within 30 minutes!

---

**Need Help?** Check the Apps Script execution log (View → Logs) for detailed error messages.


