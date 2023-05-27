const db = require('../models/database.js');

const businessController = {};

businessController.addBusiness = (req, res, next) => {
  try {
    const { name, address, ratings } = req.body;
    const values = [name, address, ratings];
    const insertBusiness = `INSERT INTO businesses (name, address, ratings) VALUES ($1, $2, $3)`;
    db.query(insertBusiness, values).then((business) => {
      console.log(business);
      res.locals.business = business;
      return next();
    });
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
