const { Client } = require('pg');

// Function to connect to the database and execute a query
async function connectAndQuery(query, params) {
    const client = new Client({
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: 5432, 
        ssl: {
            rejectUnauthorized: false 
        }
    });
    try {
        await client.connect();  // Connect to the database
        const result = await client.query(query, params); // Execute the query
        return result;
    } catch (error) {
        console.error('Database query error', error);
        throw error;
    } finally {
        await client.end(); // Close the connection
    }
}

module.exports = connectAndQuery;

