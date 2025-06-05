const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Send contact form email
router.post('/contact', emailController.sendContactEmail);

module.exports = router;