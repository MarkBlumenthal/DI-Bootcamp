const express = require('express');
const router = express.Router();
const connectAndQuery = require('../db');  // Adjusted to use the new db connection function

function validateTask(req, res, next) {
    const task = req.body;
    if (!task || typeof task.name !== 'string') {
        return res.status(400).json({ message: 'Task name is required and should be a string' });
    }
    next();
}

// Define your routes
router.get('/', async (req, res) => {
    try {
        const result = await connectAndQuery('SELECT * FROM tasks', []);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await connectAndQuery('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

router.post('/', validateTask, async (req, res) => {
    try {
        const task = req.body;
        const result = await connectAndQuery('INSERT INTO tasks (name) VALUES ($1) RETURNING *', [task.name]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

router.put('/:id', validateTask, async (req, res) => {
    try {
        const task = req.body;
        const result = await connectAndQuery('UPDATE tasks SET name = $1 WHERE id = $2 RETURNING *', [task.name, req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await connectAndQuery('DELETE FROM tasks WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

module.exports = router;


  