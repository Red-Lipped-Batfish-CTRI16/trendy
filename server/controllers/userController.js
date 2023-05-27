const db = require('../models/database.mjs');

const userController = {};

userController.getUsers = (req, res, next) => {
  try {
    const getUsers = 'SELECT * from users';
    db.query(getUsers).then((users) => {
      console.log(users);
    });
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.insertUser = (req, res, next) => {
  try {
    const { username, location } = req.body;
    const values = [username, location];
    const insertUser = `INSERT INTO users (username, location) VALUES ($1, $2)`;
    db.query(insertUser, values).then((user) => {
      console.log(user);
      res.locals.user = user;
    });
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = trendyController;
