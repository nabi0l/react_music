const emailService = require('../services/emailService');

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Send email
    const result = await emailService.sendEmail({
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact: ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br>')}</p>`
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      ...result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      ...(process.env.NODE_ENV === 'development' && { error: error.stack })
    });
  }
};