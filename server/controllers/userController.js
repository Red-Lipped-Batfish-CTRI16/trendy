const db = require('../models/database.js');

const userController = {};

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

userController.addUser = (req, res, next) => {
  try {
    const { username, location, password } = req.body;
    const values = [username, location, password];
    const insertUser = `INSERT INTO users (username, location, password) VALUES ($1, $2, $3)`;
    db.query(insertUser, values).then((user) => {
      console.log(user);
      res.locals.user = user;
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = userController;
