const mysql = require('mysql2/promise');
const dbConfig = require('./config/db.config');

async function testConnection() {
  const pool = mysql.createPool(dbConfig);
  try {
    const [rows] = await pool.query('SHOW DATABASES LIKE ?', ['tunedownloader']);
    console.log('Database exists:', rows.length > 0);
    
    // Test table creation
    await pool.query(`CREATE TABLE IF NOT EXISTS test_table (id INT PRIMARY KEY)`);
    console.log('Test table created successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

testConnection();
