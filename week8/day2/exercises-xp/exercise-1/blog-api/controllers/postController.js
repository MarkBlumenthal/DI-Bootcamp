const {knex} = require('../modules/db');  

// Function to get all posts
const getAllPosts = async (req, res) => {
    console.log('getallpost');
    try {
        const rows  = await knex.select('*').from('posts');
        res.json(rows);
    } catch (err) {
        console.log('Read error:', err);
        res.status(500).json({ error: 'Error fetching posts' });
    }
};



// Function to get a single post by ID
const getPostById = async (req, res) => {
    try {
        const rows = await knex('posts').where({ id: req.params.id });
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error('Read error:', err);
        res.status(500).json({ error: 'Error fetching post' });
    }
};

// Function to create a new post
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;  
        const result = await knex('posts').insert({ title, content }).returning('*');
        res.status(201).json(result);
    } catch (err) {
        console.error('Insert error:', err);
        res.status(500).json({ error: 'Error creating post' });
    }
};

// Function to update a post
const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const result = await knex('posts').where({ id }).update({ title, content }).returning('*');
        if (result.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(result[0]);
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).json({ error: 'Error updating post' });
    }
};

// Function to delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await knex('posts').where({ id }).del().returning('*');
        if (result.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).json({ error: 'Error deleting post' });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};

