const express = require('express');
const router = express.Router();
const favController = require('../controllers/favController');

router.get('/', favController.getFavs, (req, res, next) => {
  res.json(res.locals.favs);
});

router.post('/', favController.addFav, (req, res, next) => {
  res.json(res.locals.fav);
});

router.delete('/', favController.removeFav, (req, res, next) => {
  res.json(res.locals.fav);
});

module.exports = router;
