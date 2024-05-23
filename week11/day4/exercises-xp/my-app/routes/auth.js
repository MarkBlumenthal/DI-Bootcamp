const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth'); 

const users = [];

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    // Validation criteria
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'User registered', token });
  });

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ username }, 'secret_key', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username }, 'refresh_secret_key', { expiresIn: '7d' });
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, 'refresh_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '15m' });
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.json({ message: 'Token refreshed' });
  });
});



// Add this after your existing routes
router.put('/profile', authenticateToken, async (req, res) => {
  const { username, newPassword } = req.body;

  const user = users.find(u => u.username === req.user.username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (newPassword) {
    user.password = await bcrypt.hash(newPassword, 10);
  }

  res.json({ message: 'Profile updated' });
});

// In-memory store for revoked tokens
const revokedTokens = new Set();

// Add this logic in the middleware to check for revoked tokens
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  if (revokedTokens.has(token)) {
    return res.status(403).json({ message: 'Token has been revoked' });
  }

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Add route to revoke tokens
router.post('/revoke', authenticateToken, (req, res) => {
  const token = req.cookies.token;
  revokedTokens.add(token);
  res.json({ message: 'Token revoked' });
});


// Add this after your existing routes
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out' });
  });
  

module.exports = router;

  
