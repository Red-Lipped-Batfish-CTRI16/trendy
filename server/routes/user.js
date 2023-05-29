const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers, (req, res, next) => {
  console.log('here');
  res.json(res.locals.users);
});

module.exports = router;
