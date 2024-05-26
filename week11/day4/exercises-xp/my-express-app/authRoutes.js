require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const pool = require('./db');
const authenticateToken = require('./authMiddleware'); // Import authenticateToken middleware
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '1h';
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const REFRESH_EXPIRATION = '7d';

const revokedTokens = [];

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const generateConfirmationToken = () => {
  return jwt.sign({}, JWT_SECRET, { expiresIn: '1d' });
};

// Rate limiters
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts from this IP, please try again after 15 minutes'
});

const refreshLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many refresh attempts from this IP, please try again after 15 minutes'
});

// User registration route with email confirmation
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send('Username, password, and email are required');
  }

  if (username.length < 3 || password.length < 6) {
    return res.status(400).send('Username must be at least 3 characters long and password at least 6 characters long');
  }

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashedPassword, email]);

    const confirmationToken = generateConfirmationToken();
    const confirmationUrl = `http://localhost:3000/auth/confirm-email?token=${confirmationToken}`;

    await transporter.sendMail({
      to: email,
      subject: 'Email Confirmation',
      text: `Please confirm your email by clicking on the following link: ${confirmationUrl}`
    });

    res.status(201).send('User registered. Please check your email for confirmation.');
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// Email confirmation route
router.get('/confirm-email', async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    await pool.query('UPDATE users SET is_confirmed = TRUE WHERE username = $1', [decoded.username]);

    res.send('Email confirmed. You can now log in.');
  } catch (err) {
    res.status(400).send('Invalid or expired token');
  }
});

// User login route
router.post('/login', loginLimiter, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    if (!user.is_confirmed) {
      return res.status(400).send('Please confirm your email before logging in');
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    const refreshToken = jwt.sign({ username }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRATION });

    res.cookie('token', token, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    res.send('User logged in');
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// User logout route
router.post('/logout', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken) {
    revokedTokens.push(refreshToken);
  }
  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.send('User logged out');
});

// Token refresh route
router.post('/refresh', refreshLimiter, (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err || revokedTokens.includes(refreshToken)) {
      return res.sendStatus(403);
    }

    const newToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.cookie('token', newToken, { httpOnly: true });
    res.send({ token: newToken });
  });
});

// Profile update route
router.put('/update-profile', authenticateToken, async (req, res) => {
  const { username } = req.user;
  const { newPassword } = req.body;

  if (newPassword && newPassword.length < 6) {
    return res.status(400).send('Password must be at least 6 characters long');
  }

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await pool.query('UPDATE users SET password = $1 WHERE username = $2', [hashedPassword, username]);
    }

    res.send('Profile updated');
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

module.exports = router;


  



