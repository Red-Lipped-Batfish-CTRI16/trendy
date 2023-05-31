const express = require("express");
const router = express.Router();
import saveController from "../controllers/saveController";

router.get("/", saveController.getSaved, (req, res, next) => {
  //sending back
  console.log("now in saveController.getSaved");
  res.status(200).json(res.locals.saved);
});

router.post("/", saveController.addSaved, (req, res, next) => {
  //sending back list of selection with all properties? 
  res.status(200).json("send all likes here");
});

//should this be DELETE or POST ?
router.delete('/', saveController.removeSaved, (req, res, next) => {
res.json('send updated list')
})