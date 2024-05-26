// authMiddleware.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key'; // Ensure this matches the secret key used in authRoutes.js

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
