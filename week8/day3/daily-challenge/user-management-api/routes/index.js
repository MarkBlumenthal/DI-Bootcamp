const express = require('express');

module.exports = function(bcrypt, pool) {
    const router = express.Router();

    router.post('/register', async (req, res) => {
        const { name, lastName, email, username, password } = req.body;
        try {
            const client = await pool.connect();
            const userExists = await client.query('SELECT * FROM users WHERE username = $1', [username]);

            if (userExists.rows.length > 0) {
                client.release();
                return res.status(400).send({ error: "Username already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await client.query('INSERT INTO users (name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)', [name, lastName, email, username, hashedPassword]);
            client.release();
            res.send({ message: "User registered successfully" });
        } catch (err) {
            res.status(500).send({ error: "Database operation failed" });
        }
    });

    // Implement other routes similarly...

    return router;
};

