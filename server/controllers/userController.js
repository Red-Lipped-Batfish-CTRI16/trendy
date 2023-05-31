const db = require('../models/database.js');

const userController = {};

// getUsers: makes a query for all users in DB and returns data

userController.getUsers = (req, res, next) => {
  try {
    const getUsers = 'SELECT * from users';
    db.query(getUsers).then((users) => {
      console.log(users.rows);
      res.locals.users = users.rows;
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

// addUser: obtains username/password from req.body and uses values to create a search query
// SQL query for username. if it exists, notify the user
// else, add user's login to DB


userController.addUser = (req, res, next) => {
  try {
    const { username, password } = req.body;
    const values = [username, password];
    const check = `SELECT * FROM users WHERE username = $1`;
    db.query(check, [username]).then((result) => {
      if (result.rows.length > 0) {
        return res.status(409).json({ error: 'Username already exists' });
      } else {
        const insertUser = `INSERT INTO users (username, password) VALUES ($1, $2)`;
        db.query(insertUser, values).then((user) => {
          console.log(user);
          res.locals.user = user;
          return next();
        });
      }
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = userController;
