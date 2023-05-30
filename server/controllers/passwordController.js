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

passwordController.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    return next();
  });
};

module.exports = passwordController;
