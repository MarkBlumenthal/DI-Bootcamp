// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Enable CORS and parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// Define a GET route at /api/hello
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

// Define a POST route at /api/world
app.post('/api/world', (req, res) => {
  console.log('Received POST request body:', req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body.message}`,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

