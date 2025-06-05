const createTransporter = require('../config/emailConfig');

class EmailService {
  constructor() {
    this.transporter = null;
  }

  async initialize() {
    this.transporter = await createTransporter();
  }

  async sendEmail({ from, to, subject, text, html }) {
    if (!this.transporter) {
      await this.initialize();
    }

    try {
      const mailOptions = {
        from: from || process.env.DEFAULT_FROM_EMAIL,
        to,
        subject,
        text,
        html,
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      const response = {
        success: true,
        messageId: info.messageId,
      };

      // Add preview URL for Ethereal emails
      if (process.env.NODE_ENV === 'development') {
        response.previewUrl = nodemailer.getTestMessageUrl(info);
      }

      return response;
    } catch (error) {
      console.error('Email sending error:', error);
      throw {
        code: error.code || 'EMAIL_FAILURE',
        message: this.getErrorMessage(error),
      };
    }
  }

  getErrorMessage(error) {
    switch (error.code) {
      case 'EAUTH': return 'Authentication failed. Check email credentials.';
      case 'ECONNECTION': return 'Could not connect to email server.';
      case 'EENVELOPE': return 'Invalid email address.';
      default: return 'Failed to send email. Please try again.';
    }
  }
}

module.exports = new EmailService();