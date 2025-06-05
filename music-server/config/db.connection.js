const mysql = require('mysql2/promise');
const dbConfig = require('./db.config');

// Create pool with retry logic
let pool = null;

const getPool = async () => {
  if (!pool) {
    try {
      pool = mysql.createPool(dbConfig);
      
      // Test the connection
      const conn = await pool.getConnection();
      try {
        await conn.query('SELECT 1');
        console.log('Database connection successful');
        return pool;
      } finally {
        await conn.release();
      }
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }
  return pool;
};

module.exports = getPool;
