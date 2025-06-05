const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

// Send contact form
router.post('/', sendContactEmail);

module.exports = router;
