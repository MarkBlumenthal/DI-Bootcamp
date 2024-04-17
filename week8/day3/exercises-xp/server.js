require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', tasksRoutes);

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server started on port ${port}`));




