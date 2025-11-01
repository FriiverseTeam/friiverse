const { Pool } = require('pg');
const dotenv = require('dotenv');
const logger = require('./logger');
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

async function connectDB() {
  try {
    const client = await pool.connect();
    logger.database('Postgres Database connected!');
    client.release();
  } catch (err) {
    logger.error('Error:', err.message);
  }
}

module.exports = {
  pool,
  connectDB
};