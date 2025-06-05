require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('Testing email configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL || 'Not set');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Email credentials not properly configured in .env file');
  console.log('Please make sure you have the following in your .env file:');
  console.log('EMAIL_USER=your-email@gmail.com');
  console.log('EMAIL_PASS=your-app-specific-password');
  console.log('ADMIN_EMAIL=your-email@example.com');
  process.exit(1);
}

// Create a test transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test email options
const mailOptions = {
  from: `"Test Sender" <${process.env.EMAIL_USER}>`,
  to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
  subject: 'Test Email from Music Platform',
  text: 'This is a test email from your Music Platform server.',
  html: '<h1>Test Email</h1><p>This is a test email from your Music Platform server.</p>',
};

// Test the connection and send a test email
async function testEmail() {
  try {
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection successful!');
    
    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    
  } catch (error) {
    console.error('Error sending test email:');
    console.error('Error Code:', error.code);
    console.error('Error Message:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\nAuthentication failed. Please check:');
      console.error('1. Your email and password in the .env file');
      console.error('2. If using Gmail, make sure you\'ve generated an App Password');
      console.error('   (https://myaccount.google.com/apppasswords)');
    } else if (error.code === 'ECONNECTION') {
      console.error('\nConnection to the email server failed. Check your internet connection.');
    } else {
      console.error('\nFull Error:', error);
    }
  }
}

testEmail();
