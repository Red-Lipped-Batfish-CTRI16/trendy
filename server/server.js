require('dotenv').config();
/* eslint no-unused-vars: 0 */
const path = require('path');
const express = require('express');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const searchRouter = require('./routes/search');
const userRouter = require('./routes/user');
const businessRouter = require('./routes/business');
const favRouter = require('./routes/fav');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));

app.use('/api/search', searchRouter);
app.use('/api/user', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/fav', favRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error: error.message });
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
