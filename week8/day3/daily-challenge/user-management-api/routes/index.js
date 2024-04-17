const express = require('express');

module.exports = function(bcrypt, pool) {
    const router = express.Router();

    router.post('/register', async (req, res) => {
        const { name, lastName, email, username, password } = req.body;
        try {
            const client = await pool.connect();
            const userExists = await client.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    
            if (userExists.rows.length > 0) {
                client.release();
                return res.status(400).send({ message: "Username already exists" });
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
            await client.query('INSERT INTO users (name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)', [name, lastName, email, username, hashedPassword]);
            client.release();
            res.send({ message: "Hello, your account is now created!" });
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });
    

    router.post('/login', async (req, res) => {
        const { username, password } = req.body;
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    
            if (result.rows.length === 0) {
                client.release();
                return res.status(404).send({ message: "Username is not registered" });
            }
    
            const user = result.rows[0];
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                res.send({ message: `Hi ${user.username}, welcome back again!` });
            } else {
                res.status(401).send({ error: "Invalid password" });
            }
    
            client.release();
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });
    

    router.get('/users', async (req, res) => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT id, name, last_name, email, username FROM users'); // Avoid sending passwords
            client.release();
            res.json(result.rows);
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });

    router.get('/users/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT id, name, last_name, email, username FROM users WHERE id = $1', [id]); // Avoid sending passwords
            client.release();
    
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send({ error: "User not found" });
            }
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });

    router.put('/users/:id', async (req, res) => {
        const { id } = req.params;
        const { name, last_name, email, username } = req.body; 
        try {
            const client = await pool.connect();
            const result = await client.query('UPDATE users SET name = $1, last_name = $2, email = $3, username = $4 WHERE id = $5 RETURNING *',
                [name, last_name, email, username, id]);
            client.release();
    
            if (result.rows.length > 0) {
                res.send({ message: "User updated successfully", user: result.rows[0] });
            } else {
                res.status(404).send({ error: "User not found" });
            }
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });
    

    // Implement other routes similarly...

    return router;
};

