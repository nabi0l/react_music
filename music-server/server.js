require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const musicRoutes = require('./routes/music');
const emailRoutes = require('./routes/emailRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended:true}));

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'musicroot',
  database: process.env.DB_NAME || 'tunedownloader',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create database pool
const pool = mysql.createPool(dbConfig);

// Test database connection
async function testDbConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('SELECT 1');
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  } finally {
    if (conn) conn.release();
  }
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes(pool));
app.use('/api/email', emailRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
async function startServer() {
  await testDbConnection();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Database: ${dbConfig.host}/${dbConfig.database}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});