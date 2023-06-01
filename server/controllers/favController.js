const { Await } = require('react-router-dom');
const db = require('../models/database.js');

const favController = {};

// getFavs: takes a userID and returns a query of user's favorites w/ Name, Address, and Ratings

favController.getFavs = async (req, res, next) => {
  try {
    const { username } = req.body;
    const findUserID = `SELECT user_id FROM users WHERE username = ($1);`;
    let user_id;
   await db.query(findUserID, [username])
      .then(id => {
        user_id = id.rows[0].user_id;
      });
      
    const values = [user_id];
    const getFavs = `SELECT b.name, b.address, b.ratings, b.business_id, b.url, b.image_url, b.categories
    FROM favorites f
    JOIN businesses b ON f.business_id = b.business_id
    WHERE f.user_id = ($1);`;
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

favController.addFav = async (req, res, next) => {
  try {
    const { username, api_id } = req.body;

    let user_id, business_id;


  const findUserID = `SELECT user_id FROM users WHERE username = ($1);`;

   await db.query(findUserID, [username])
      .then(id => {
        user_id = id.rows[0].user_id;
      });
    

    const findBusinessID = `SELECT business_id FROM businesses WHERE api_id = ($1);`

    await db.query(findBusinessID, [api_id])
      .then(b_id => {
        business_id = b_id.rows[0].business_id;
      });
      
    const values = [user_id, business_id];

    const addFav = `INSERT INTO favorites (user_id, business_id) VALUES ($1, $2)`;
    
    db.query(addFav, values).then((fav) => {
      console.log(user_id);
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
