/**
 * Google Apps Script to handle form submissions and write to Google Sheet
 * WITH AUTOMATED EMAIL & WHATSAPP ALERTS
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any default code
 * 4. Paste this entire code
 * 5. Update YOUR_EMAIL_HERE with your email address (line 30)
 * 6. (Optional) For WhatsApp: Set up Twilio and update credentials (see comments)
 * 7. Click Save (Ctrl+S or Cmd+S)
 * 8. Click Deploy > Manage deployments > Edit (pencil icon) > New version > Deploy
 * 9. Test by submitting the form - you should receive an email immediately!
 */

// ===== CONFIGURATION =====
// UPDATE THIS: Your email address to receive lead alerts
const YOUR_EMAIL = 'upadhyay1.aman@gmail.com'; // ⚠️ CHANGE THIS TO YOUR EMAIL

// Optional: WhatsApp via Twilio (requires Twilio account)
// Leave these empty if you only want email alerts
const TWILIO_ACCOUNT_SID = ''; // Your Twilio Account SID
const TWILIO_AUTH_TOKEN = ''; // Your Twilio Auth Token
const TWILIO_WHATSAPP_NUMBER = ''; // Your Twilio WhatsApp number (format: whatsapp:+1234567890)
const YOUR_WHATSAPP_NUMBER = ''; // Your WhatsApp number to receive alerts (format: whatsapp:+1234567890)

// ===== MAIN FUNCTION =====
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the POST data
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare the row data in the correct order matching your headers:
    // Name, Email, Company, Role, Company Size, Challenge, Message, Timestamp
    var rowData = [
      data.name || '',
      data.email || '',
      data.company || '',
      data.role || '',
      data.employees || '',
      data.challenge || '',
      data.message || '',
      timestamp
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Log that data was saved
    Logger.log('✅ Data saved to sheet: ' + data.name + ' from ' + data.company);
    
    // Send immediate alerts (Email + optional WhatsApp)
    // Run in background to not delay form response
    try {
      sendLeadAlert(data);
    } catch (alertError) {
      Logger.log('⚠️ Alert error (non-critical): ' + alertError.toString());
      // Don't fail the form submission if alerts fail
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Form submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'message': 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== EMAIL ALERT FUNCTION =====
function sendLeadAlert(leadData) {
  try {
    // Format the email subject (plain text, no emojis for subject line)
    var subject = 'NEW LEAD: ' + leadData.name + ' from ' + leadData.company;
    
    // Plain text version for email clients that don't support HTML
    var plainTextBody = `
NEW LEAD ALERT - Contact within 30 minutes for best conversion!

==========================================
LEAD INFORMATION
==========================================

Name: ${leadData.name}
Email: ${leadData.email}
Company: ${leadData.company}
Role: ${leadData.role}
Company Size: ${leadData.employees}
Main Challenge: ${leadData.challenge}
Message: ${leadData.message || 'No message provided'}

==========================================
QUICK ACTIONS
==========================================

Reply to: ${leadData.email}
Submitted: ${new Date().toLocaleString()}

CONTACT WITHIN 30 MINUTES FOR HIGHEST CONVERSION RATE!

==========================================
This is an automated alert from TrendMetrics Intelligence
    `;
    
    // HTML version with visual icons and styling
    var htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .alert-header {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 20px -30px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: middle;
      background-color: #3b82f6;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
    .info-section {
      background-color: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    .info-row {
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: bold;
      color: #1e3a5f;
      display: inline-block;
      width: 150px;
    }
    .info-value {
      color: #374151;
    }
    .cta-section {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin: 20px 0;
    }
    .cta-button {
      display: inline-block;
      background-color: white;
      color: #3b82f6;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      color: #6b7280;
      font-size: 12px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }
    .timestamp {
      color: #6b7280;
      font-size: 14px;
      text-align: center;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="alert-header">
      NEW LEAD ALERT
    </div>
    
    <div style="text-align: center; color: #ef4444; font-weight: bold; font-size: 18px; margin-bottom: 20px;">
      Contact within 30 minutes for best conversion!
    </div>
    
    <div class="info-section">
      <h2 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
        LEAD INFORMATION
      </h2>
      
      <div class="info-row">
        <span class="info-label">Name:</span>
        <span class="info-value"><strong>${leadData.name}</strong></span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Email:</span>
        <span class="info-value"><a href="mailto:${leadData.email}" style="color: #3b82f6; text-decoration: none;">${leadData.email}</a></span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Company:</span>
        <span class="info-value">${leadData.company}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Role:</span>
        <span class="info-value">${leadData.role}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Company Size:</span>
        <span class="info-value">${leadData.employees}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Main Challenge:</span>
        <span class="info-value" style="color: #ef4444; font-weight: bold;">${leadData.challenge}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Message:</span>
        <span class="info-value">${leadData.message || 'No message provided'}</span>
      </div>
    </div>
    
    <div class="cta-section">
      <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">
        CONTACT WITHIN 30 MINUTES
      </div>
      <div style="font-size: 14px; opacity: 0.9;">
        For highest conversion rate!
      </div>
      <a href="mailto:${leadData.email}?subject=Re: Free Reporting Audit Request" class="cta-button">
        Reply to Lead
      </a>
    </div>
    
    <div class="timestamp">
      Submitted: ${new Date().toLocaleString()}
    </div>
    
    <div class="footer">
      This is an automated alert from TrendMetrics Intelligence
    </div>
  </div>
</body>
</html>
    `;
    
    // Send email using Gmail service with HTML
    if (YOUR_EMAIL && YOUR_EMAIL !== 'YOUR_EMAIL_HERE' && YOUR_EMAIL.trim() !== '') {
      try {
        GmailApp.sendEmail(
          YOUR_EMAIL,
          subject,
          plainTextBody,
          {
            htmlBody: htmlBody
          }
        );
        
        Logger.log('✅ Email alert sent successfully to ' + YOUR_EMAIL);
      } catch (emailError) {
        Logger.log('❌ GmailApp error: ' + emailError.toString());
        // Try alternative method using MailApp
        try {
          MailApp.sendEmail({
            to: YOUR_EMAIL,
            subject: subject,
            body: plainTextBody,
            htmlBody: htmlBody
          });
          Logger.log('✅ Email sent via MailApp to ' + YOUR_EMAIL);
        } catch (mailError) {
          Logger.log('❌ Both email methods failed: ' + mailError.toString());
        }
      }
    } else {
      Logger.log('⚠️ Email not configured. Current value: ' + YOUR_EMAIL);
    }
    
    // Send WhatsApp alert (if configured)
    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && YOUR_WHATSAPP_NUMBER) {
      sendWhatsAppAlert(leadData);
    }
    
  } catch (error) {
    Logger.log('❌ Error sending alert: ' + error.toString());
    // Don't fail the form submission if alert fails
  }
}

// ===== WHATSAPP ALERT FUNCTION (Optional - via Twilio) =====
function sendWhatsAppAlert(leadData) {
  try {
    // Format WhatsApp message (shorter than email)
    var whatsappMessage = `🚨 NEW LEAD ALERT

${leadData.name} from ${leadData.company}
📧 ${leadData.email}
💼 ${leadData.role}
⚠️ Challenge: ${leadData.challenge}

⚡ Contact within 30 minutes!

View full details in your email.`;

    // Twilio API endpoint
    var url = 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json';
    
    // Prepare request payload
    var payload = {
      'From': TWILIO_WHATSAPP_NUMBER,
      'To': YOUR_WHATSAPP_NUMBER,
      'Body': whatsappMessage
    };
    
    // Make request to Twilio
    var options = {
      'method': 'post',
      'headers': {
        'Authorization': 'Basic ' + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN)
      },
      'payload': payload
    };
    
    var response = UrlFetchApp.fetch(url, options);
    Logger.log('✅ WhatsApp alert sent: ' + response.getContentText());
    
  } catch (error) {
    Logger.log('❌ Error sending WhatsApp alert: ' + error.toString());
    // Don't fail if WhatsApp fails
  }
}

// ===== OPTIONAL: HTML Email Formatting =====
function formatEmailHTML(leadData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">🚨 NEW LEAD ALERT</h2>
      <p style="color: #ef4444; font-weight: bold;">Contact within 30 minutes for best conversion!</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Name:</strong></td><td style="padding: 8px;">${leadData.name}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Email:</strong></td><td style="padding: 8px;">${leadData.email}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Company:</strong></td><td style="padding: 8px;">${leadData.company}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Role:</strong></td><td style="padding: 8px;">${leadData.role}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Company Size:</strong></td><td style="padding: 8px;">${leadData.employees}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Challenge:</strong></td><td style="padding: 8px;">${leadData.challenge}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Message:</strong></td><td style="padding: 8px;">${leadData.message || 'No message'}</td></tr>
      </table>
      
      <p style="margin-top: 20px;">
        <a href="mailto:${leadData.email}" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Reply to Lead
        </a>
      </p>
    </div>
  `;
}

/**
 * Test function - you can run this to test if the script works
 * (Optional - you can delete this after testing)
 */
function test() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Headers: ' + sheet.getRange(1, 1, 1, 8).getValues());
}

/**
 * TEST EMAIL FUNCTION - Run this to test if emails are working
 * Steps:
 * 1. Click Run → Run function → testEmailAlert
 * 2. Grant permissions if prompted
 * 3. Check your email (and spam folder)
 * 4. Check View → Logs for any errors
 */
function testEmailAlert() {
  Logger.log('🧪 Testing email alert...');
  Logger.log('Email configured: ' + YOUR_EMAIL);
  
  var testData = {
    name: 'Test Lead',
    email: 'test@example.com',
    company: 'Test Company',
    role: 'CEO',
    employees: '1-10',
    challenge: 'Testing email alerts',
    message: 'This is a test email to verify the alert system is working.'
  };
  
  try {
    sendLeadAlert(testData);
    Logger.log('✅ Test email sent! Check your inbox at: ' + YOUR_EMAIL);
  } catch (error) {
    Logger.log('❌ Test failed: ' + error.toString());
  }
}

/**
 * SIMPLE EMAIL TEST - Tests basic Gmail functionality
 * Run this first to check if Gmail permissions are working
 */
function testSimpleEmail() {
  try {
    GmailApp.sendEmail(
      YOUR_EMAIL,
      'Test Email from Apps Script',
      'If you receive this, Gmail permissions are working correctly!'
    );
    Logger.log('✅ Simple test email sent!');
  } catch (error) {
    Logger.log('❌ Simple test failed: ' + error.toString());
    Logger.log('This usually means Gmail permissions are not granted.');
    Logger.log('Try running the function again and click "Review permissions" → "Allow"');
  }
}

