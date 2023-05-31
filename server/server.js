require('dotenv').config();
/* eslint no-unused-vars: 0 */

// Required
const path = require('path');
const express = require('express');

// Require in Parsers
const cookieParser = require('cookie-parser');

// Require in routers
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const searchRouter = require('./routes/search');
const userRouter = require('./routes/user');
const businessRouter = require('./routes/business');
const favRouter = require('./routes/fav');

// Server
const app = express();
const port = 3000;


// Serving up static files 
app.use(express.static('public', { extensions: ['css'] }));
app.use(express.static(path.resolve(__dirname, '../dist')));

// Provide server w/ functionality access
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use(cookieParser());

// Routing endpoints
app.use('/api/search', searchRouter);
app.use('/api/user', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/fav', favRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

// Global error handler
app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error: error.message });
});

// Listening on port 3000
module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
