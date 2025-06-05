const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter;

async function createTransporter() {
  if (transporter) return transporter;

  // Development configuration (Ethereal)
  if (process.env.NODE_ENV === 'development') {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log('Ethereal test account created:', testAccount.user);
  } 
  // Production configuration
  else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Verify connection
  await transporter.verify();
  console.log('Email transporter is ready');
  return transporter;
}

module.exports = createTransporter;