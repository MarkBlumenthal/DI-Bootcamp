const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const protectedRouter = require('./routes/protected');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/auth', authRouter);
app.use('/protected', protectedRouter);