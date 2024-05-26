require('dotenv').config();
const jwt = require('jsonwebtoken');
const pool = require('./db');

const JWT_SECRET = process.env.JWT_SECRET; // Ensure this matches the secret key used in authRoutes.js

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    // Check if token is revoked
    const revokedTokenResult = await pool.query('SELECT * FROM revoked_tokens WHERE token = $1', [token]);
    if (revokedTokenResult.rows.length > 0) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;



