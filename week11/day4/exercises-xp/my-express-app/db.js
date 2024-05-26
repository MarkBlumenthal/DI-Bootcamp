// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Read from environment variable
});

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      is_confirmed BOOLEAN DEFAULT FALSE
    );
  `;
  await pool.query(query);

  const revokeTokenTable = `
    CREATE TABLE IF NOT EXISTS revoked_tokens (
      token TEXT PRIMARY KEY
    );
  `;
  await pool.query(revokeTokenTable);
};

createUserTable();

module.exports = pool;



