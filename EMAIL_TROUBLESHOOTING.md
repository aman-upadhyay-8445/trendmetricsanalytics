# Email Alert Troubleshooting Guide

## 🔍 Quick Fix Checklist

If emails aren't being sent, check these in order:

### ✅ Step 1: Verify Email is Set Correctly
- Open Apps Script
- Check that `YOUR_EMAIL = 'upadhyay1.aman@gmail.com';` (your actual email)
- Make sure there are no extra spaces or quotes

### ✅ Step 2: Check Execution Logs
1. In Apps Script, click **View** → **Logs** (or press Ctrl+Enter / Cmd+Enter)
2. Submit a test form
3. Check the logs - you should see:
   - `✅ Data saved to sheet: [name] from [company]`
   - `✅ Email alert sent successfully to upadhyay1.aman@gmail.com`
   - OR an error message

### ✅ Step 3: Check Gmail Permissions
1. In Apps Script, click **Run** → **Run function** → `sendLeadAlert`
2. If prompted, click **Review permissions**
3. Click **Allow** to grant Gmail access
4. You may need to click **Advanced** → **Go to [Project Name] (unsafe)**

### ✅ Step 4: Test Email Function Directly
1. In Apps Script, create a test function:
   ```javascript
   function testEmail() {
     var testData = {
       name: 'Test Lead',
       email: 'test@example.com',
       company: 'Test Company',
       role: 'CEO',
       employees: '1-10',
       challenge: 'Testing',
       message: 'This is a test'
     };
     sendLeadAlert(testData);
   }
   ```
2. Click **Run** → **Run function** → `testEmail`
3. Check your email and logs

### ✅ Step 5: Redeploy After Changes
- After fixing the code, you MUST redeploy:
  1. Click **Deploy** → **Manage deployments**
  2. Click **pencil icon** (edit)
  3. Click **New version**
  4. Click **Deploy**

---

## 🐛 Common Issues & Solutions

### Issue 1: "Email not configured" in logs
**Solution:** 
- Make sure `YOUR_EMAIL` is set to your actual email
- Remove any extra spaces: `'upadhyay1.aman@gmail.com'` (not `' upadhyay1.aman@gmail.com '`)

### Issue 2: "GmailApp is not defined" or Permission Error
**Solution:**
- Run the script manually once to trigger permission request
- Go to **Run** → **Run function** → `sendLeadAlert`
- Grant permissions when prompted

### Issue 3: Emails going to Spam
**Solution:**
- Check your spam/junk folder
- Add the sender to contacts (it will be from your own Gmail account)
- Mark as "Not Spam"

### Issue 4: Script runs but no email
**Solution:**
- Check Apps Script execution log (View → Logs)
- Look for error messages
- Try using `MailApp` instead of `GmailApp` (code already includes fallback)

### Issue 5: "Execution time exceeded"
**Solution:**
- The script now runs alerts in background
- If still timing out, check for infinite loops
- Reduce email content size

---

## 🔧 Manual Test Steps

1. **Test the email function:**
   ```javascript
   function testEmail() {
     GmailApp.sendEmail(
       'upadhyay1.aman@gmail.com',
       'Test Email',
       'This is a test email from Apps Script'
     );
   }
   ```
   - Run this function
   - Check if you receive the email
   - If yes → the issue is in `sendLeadAlert` function
   - If no → Gmail permissions issue

2. **Test with real data:**
   - Submit a real form
   - Check logs immediately
   - Look for any error messages

3. **Check Gmail Quota:**
   - Apps Script has a daily email limit (100-500 emails/day)
   - Check if you've exceeded the limit

---

## 📧 Alternative: Use MailApp Instead

If `GmailApp` doesn't work, the code now automatically tries `MailApp` as a fallback. But you can force it:

Replace this line in `sendLeadAlert`:
```javascript
GmailApp.sendEmail(...)
```

With:
```javascript
MailApp.sendEmail({
  to: YOUR_EMAIL,
  subject: subject,
  body: emailBody
});
```

---

## 🎯 Expected Behavior

When working correctly:
1. Form submits → Data saves to sheet ✅
2. `sendLeadAlert()` is called
3. Email is sent via GmailApp
4. Log shows: `✅ Email alert sent successfully to upadhyay1.aman@gmail.com`
5. You receive email within 5-10 seconds

---

## 📞 Still Not Working?

1. **Check Execution Logs:**
   - View → Logs in Apps Script
   - Look for error messages
   - Copy the error and check what it says

2. **Verify Gmail Access:**
   - Run → Run function → `sendLeadAlert`
   - Grant permissions if prompted

3. **Test with Simple Email:**
   - Create a simple test function (see above)
   - If that works, the issue is in the alert function
   - If that doesn't work, it's a permissions issue

4. **Check Spam Folder:**
   - Emails might be going to spam
   - Check all email folders

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Logs show: `✅ Email alert sent successfully`
- ✅ You receive email within 10 seconds
- ✅ Email subject: `🚨 NEW LEAD: [Name] from [Company]`
- ✅ Email contains all lead information


