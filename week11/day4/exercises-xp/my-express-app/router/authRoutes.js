// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; // In-memory array for user data
const JWT_SECRET = 'your_secret_key'; // Set your secret key here
const JWT_EXPIRATION = '1h'; // Set JWT expiration time
const REFRESH_SECRET = 'your_refresh_secret_key'; // Set your refresh secret key here
const REFRESH_EXPIRATION = '7d'; // Set refresh token expiration time

// User registration route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate user input
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  // Generate JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  const refreshToken = jwt.sign({ username }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRATION });

  // Set tokens as HTTP cookies
  res.cookie('token', token, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  res.status(201).send('User registered');
});

// User login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate user input
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).send('Invalid credentials');
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }

  // Generate JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  const refreshToken = jwt.sign({ username }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRATION });

  // Set tokens as HTTP cookies
  res.cookie('token', token, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  res.send('User logged in');
});

// Token refresh route
router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    const newToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.cookie('token', newToken, { httpOnly: true });
    res.send({ token: newToken });
  });
});

module.exports = router;



