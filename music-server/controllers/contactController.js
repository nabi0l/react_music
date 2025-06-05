const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a test account using Ethereal Email (for development only)
let transporter;

async function createTestAccount() {
  try {
    // Create a test account
    let testAccount = await nodemailer.createTestAccount();
    
    // Create a transporter using the test account
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    
    console.log('Ethereal test account created:');
    console.log('Email:', testAccount.user);
    console.log('Password:', testAccount.pass);
    console.log('SMTP URL: smtp.ethereal.email:587');
    
  } catch (error) {
    console.error('Error creating test account:', error);
    throw error;
  }
}

// Initialize the test account when the server starts
createTestAccount().catch(console.error);

const sendContactEmail = async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    
    // Validate required fields
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      console.error('Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
      ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'Not set',
      NODE_ENV: process.env.NODE_ENV || 'development'
    });

    // Get the test account info
    const testAccount = await nodemailer.createTestAccount();
    
    // Create a new transport for this email
    const testTransporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${testAccount.user}>`,
      to: testAccount.user, // Sending to self for testing
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    try {
      // Verify test transporter configuration
      await testTransporter.verify();
      console.log('Test SMTP server is ready to take our messages');
      
      // Send email
      const info = await testTransporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      
      // Get the test message URL (Ethereal specific)
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Preview URL: %s', previewUrl);

      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully! Check the Ethereal email inbox for the test message.',
        messageId: info.messageId,
        previewUrl: previewUrl // Send the preview URL to the client
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // This will be caught by the outer catch block
    }
  } catch (error) {
    console.error('Error in sendContactEmail:', {
      error: error.message,
      stack: error.stack,
      response: error.response
    });
    
    // More specific error messages
    let errorMessage = 'Failed to send message';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to the email server.';
    } else if (error.responseCode) {
      errorMessage = `Email server error: ${error.responseCode} - ${error.response}`;
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  sendContactEmail,
};
