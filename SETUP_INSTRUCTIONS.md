# Google Sheets Integration Setup Instructions

## Step-by-Step Guide to Connect Your Contact Form to Google Sheets

### Step 1: Open Google Apps Script

1. Open your Google Sheet (the one with headers: Name, Email, Company, Role, Company Size, Challenge, Message, Timestamp)
2. Click on **Extensions** in the menu bar
3. Select **Apps Script**
4. A new tab will open with the Apps Script editor

### Step 2: Paste the Script Code

1. In the Apps Script editor, you'll see a default function `myFunction()`
2. **Delete all the default code**
3. Open the file `google-apps-script.js` from this project
4. **Copy the entire code** from that file
5. **Paste it** into the Apps Script editor
6. Click **Save** (or press Ctrl+S / Cmd+S)
7. Give your project a name (e.g., "Form Submission Handler")

### Step 3: Deploy as Web App

1. In the Apps Script editor, click on **Deploy** in the top right
2. Select **New deployment**
3. Click the gear icon (⚙️) next to "Select type"
4. Choose **Web app**
5. Fill in the deployment settings:
   - **Description**: "Form Submission Handler" (or any description you like)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone** (this is required for the form to work)
6. Click **Deploy**
7. You may be asked to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
8. After authorization, you'll see a **Web App URL**
9. **Copy this URL** - you'll need it in the next step!

### Step 4: Update the Contact Form

1. Open the file `contact.html` in your project
2. Find this line in the JavaScript section (around line 250):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. **Replace** `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'` with your actual Web App URL
   - Keep the quotes around the URL
   - Example: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';`
4. Save the file

### Step 5: Test the Integration

1. Open `contact.html` in your browser
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet - you should see the data appear in a new row!

### Troubleshooting

**Problem: Form submits but data doesn't appear in sheet**
- Make sure your sheet headers match exactly: Name, Email, Company, Role, Company Size, Challenge, Message, Timestamp
- Check that the Apps Script is deployed and the URL is correct
- Make sure "Who has access" is set to "Anyone"

**Problem: "Authorization required" error**
- Make sure you authorized the script when deploying
- Try redeploying the script

**Problem: CORS error in browser console**
- This is normal! We're using `mode: 'no-cors'` which means we can't read the response, but the data should still be saved

**Problem: Data appears but in wrong columns**
- Check that your sheet headers are in the exact order: Name, Email, Company, Role, Company Size, Challenge, Message, Timestamp
- The script writes data in this exact order

### Security Note

The Web App URL is public, but:
- It only accepts POST requests with the correct data format
- It only writes to your specific sheet
- You can revoke access anytime by deleting the deployment

### Updating the Script

If you need to update the script:
1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (pencil) next to your deployment
4. Click **New version**
5. Click **Deploy**
6. The URL stays the same, but the new version will be active

---

## Quick Checklist

- [ ] Google Sheet created with correct headers
- [ ] Apps Script code pasted and saved
- [ ] Script deployed as Web App
- [ ] Web App URL copied
- [ ] Contact form updated with Web App URL
- [ ] Form tested and working
- [ ] Data appears in Google Sheet

---

## Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Check the Apps Script execution log (View → Logs in Apps Script)
3. Verify your sheet headers match exactly
4. Make sure the Web App URL is correct and includes `/exec` at the end


