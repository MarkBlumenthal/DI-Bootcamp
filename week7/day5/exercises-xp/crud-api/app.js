// #Exercise-3


const express = require('express');
const app = express();
const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Data successfully retrieved and sent as response.');
        res.json(posts);
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).send('Failed to fetch posts');
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

