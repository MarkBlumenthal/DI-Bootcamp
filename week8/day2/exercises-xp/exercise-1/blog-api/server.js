const express = require('express');

// Import and use routes
const postRoutes = require('./routes/postRoutes.js');

const app = express();


// Middleware to parse JSON bodies
app.use(express.json());


app.use(postRoutes);  // This mounts all postRoutes at the root '/'

// Handle 404 errors for any unhandled routes
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start the Express app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

