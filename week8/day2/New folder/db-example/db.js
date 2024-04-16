const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'postgres',
        password: 'arsenal_1'
    }
});



fetchProducts();






