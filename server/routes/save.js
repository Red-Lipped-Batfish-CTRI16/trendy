const express = require("express");
const router = express.Router();
const saveController = require("../controllers/saveController");
const businessController = require("../controllers/businessController");


// router.get("/", saveController.getSaved, (req, res, next) => {
//   //sending back
//   console.log("now in saveController.getSaved");
//   res.status(200).json(res.locals.saved);
// });

router.post("/", businessController.addBusiness, saveController.addSaved, (req, res, next) => {
  //sending back list of selection with all properties?
  res.sendStatus(200);
});

// //should this be DELETE or POST ?
// router.delete('/', saveController.removeSaved, (req, res, next) => {
// res.json('send updated list')
// })

module.exports = router;
