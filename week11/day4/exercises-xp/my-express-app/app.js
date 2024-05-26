const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./authRoutes');
const authenticateToken = require('./authMiddleware');

const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Use auth routes
app.use('/auth', authRoutes);

// Define protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

// Create a special route for authentication check
app.get('/check-auth', authenticateToken, (req, res) => {
  res.send('You are authenticated');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



