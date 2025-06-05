const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../config/db');

const authController = {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;
            
            // Check if user exists
            const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            if (existingUser.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user
            const [result] = await pool.query(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [username, email, hashedPassword]
            );

            // Create token
            const token = jwt.sign(
                { userId: result.insertId },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(201).json({ token, userId: result.insertId });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Registration failed' });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Find user
            const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            if (!user.length) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Verify password
            const validPassword = await bcrypt.compare(password, user[0].password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Create token
            const token = jwt.sign(
                { userId: user[0].id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({ token, userId: user[0].id });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Login failed' });
        }
    }
};

module.exports = authController;