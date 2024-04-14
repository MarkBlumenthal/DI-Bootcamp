const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
