const express = require("express");
const getCharacterById = require("../controllers/getCharById");
const rickandmortyRouter = express.Router();

rickandmortyRouter.get("/:id", getCharacterById);

module.exports = rickandmortyRouter;
