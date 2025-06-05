require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'musicroot', // Default password from server.js
    database: process.env.DB_NAME || 'tunedownloader',
    port: process.env.DB_PORT || 3306,
    multipleStatements: true // Allow multiple statements in queries
};

module.exports = dbConfig;
