const db = require('../models/database.js');

const favController = {};

// getFavs: takes a userID and returns a query of user's favorites w/ Name, Address, and Ratings

favController.getFavs = (req, res, next) => {
  try {
    const { user_id } = req.body;
    const values = [user_id];
    const getFavs = `SELECT b.name, b.address, b.ratings
FROM favorites f
JOIN businesses b ON f.business_id = b.business_id
WHERE f.user_id = $1`;
    db.query(getFavs, values).then((favorites) => {
      console.log(favorites.rows);
      res.locals.favs = favorites.rows;
      next();
    });
  } catch (error) {
    return next(error);
  }
};

// addFav: adds a new business to user's favorite list

favController.addFav = (req, res, next) => {
  try {
    const { user_id, username, business_id } = req.body;
    const values = [user_id, username, business_id];
    const addFav = `INSERT INTO favorites (user_id, username, business_id) VALUES ($1, $2, $3)`;
    db.query(addFav, values).then((fav) => {
      console.log(fav);
      res.locals.fav = fav;
    });
    return next();
  } catch (error) {
    return next(error);
  }
};

// removeFav: removes a favorite from user's list

favController.removeFav = (req, res, next) => {
  try {
    const { user_id, username, business_id } = req.body;
    const values = [user_id, username, business_id];
    const removeFav = `DELETE FROM favorites WHERE user_id = $1 AND username = $2 AND business_id = $3`;
    db.query(removeFav, values).then((fav) => {
      console.log(fav);
      res.locals.fav = fav;
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = favController;
