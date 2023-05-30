const bcrypt = require('bcrypt');

const passwordController = {};

passwordController.hashPassword = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) {
      return next(err);
    }
    req.body.password = hashed;
    return next();
  });
};

module.exports = passwordController;
