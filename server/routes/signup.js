const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passwordController = require('../controllers/passwordController');

router.post(
  '/',
  passwordController.hashPassword,
  userController.addUser,
  (req, res, next) => {
    res.json(res.locals.user);
  }
);

module.exports = router;
