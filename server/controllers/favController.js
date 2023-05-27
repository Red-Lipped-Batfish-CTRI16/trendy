const db = require('../models/database.mjs');

const favController = {};

favController.getFavs = (req, res, next) => {
  try {
    const { username_id } = req.body;
    const values = [username_id];
    const getFavs = `SELECT b.name, b.address, b.ratings
FROM favorites f
JOIN businesses b ON f.business_id = b.business_id
WHERE f.user_id = $1`;
    db.query(getFavs, values).then((favorites) => {
      console.log(favorites);
      res.locals.favorites = favorites;
      next();
    });
  } catch (error) {
    return next(error);
  }
};
