const express = require("express");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const favRouter = express.Router();

favRouter.post("/", postFav);
favRouter.delete("/:id", deleteFav);

module.exports = favRouter;
