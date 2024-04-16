const { Pool } = require('pg');
const pool = new Pool({
    connectionString: 'postgresql://user:arsenal_1@localhost:5432/blog'
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

