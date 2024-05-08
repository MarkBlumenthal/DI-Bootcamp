const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    const message = 'Hello From Express\nPost to server:';
    
    res.json({ message });
  });


app.post('/api/world', (req, res) => {
  console.log('Received POST request body:', req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body.message}`,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

