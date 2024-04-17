const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const pool = new Pool({
    connectionString: 'Your_Database_URL_Here'
});

const router = require('./routes')(bcrypt, pool);
app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


