const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const postRoutes = require('./routes/postRoutes');
app.use('/', postRoutes);

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Server error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start the Express app
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


