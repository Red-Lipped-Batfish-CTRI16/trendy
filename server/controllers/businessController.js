const db = require("../models/database.js");

const businessController = {};

// businessController.addBusiness = (req, res, next) => {
//   try {
//     const { name, address, ratings } = req.body;
//     const values = [name, address, ratings];
//     const insertBusiness = `INSERT INTO businesses (name, address, ratings) VALUES ($1, $2, $3)`;
//     db.query(insertBusiness, values).then((business) => {
//       console.log(business);
//       res.locals.business = business;
//       return next();
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

businessController.addBusiness = async (req, res, next) => {
  try {
    console.log("we are in business");
    const { title, image, description, address, score, url, username } =
      req.body;
    res.locals.username = username;
    console.log("this is req.body", req.body);
    const values = [title, image, description, address, score, url];
    const insertBusiness = `INSERT INTO businesses (businessname, image, description, address, score, url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;
    const business = await db.query(insertBusiness, values);
    console.log("weok", business.rows[0]);
    //double check to see async/await works
    res.locals.business = business.rows[0];
    return next();
  } catch (error) {
    return next(error);
  }
};

businessController.allBusinesses = (req, res, next) => {
  try {
    const allBusinesses = `SELECT * FROM businesses`;
    db.query(allBusinesses).then((businesses) => {
      console.log(businesses.rows);
      res.locals.businesses = businesses.rows;
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = businessController;
