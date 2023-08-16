const express = require("express");
//const getLogin = require("../controllers/getLogin");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const loginRouter = express.Router();

loginRouter.get("/", login);
loginRouter.post("/", postUser);

module.exports = loginRouter;
