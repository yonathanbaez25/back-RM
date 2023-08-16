// const http = require("http");
// const getCharacterById = require("./controllers/character");

// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       let id = req.url.split("/").pop(); // string
//       return getCharacterById(req, res, id);
//     }
//   })
//   .listen(PORT, "localhost");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { rickandmortyRouter, loginRouter, favRouter } = require("./routes");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Midlleware
app.use(morgan("dev"));
app.use(express.json());
//app.use(cors());

app.use("/rickandmorty/character", rickandmortyRouter);
app.use("/rickandmorty/login", loginRouter);
app.use("/rickandmorty/fav", favRouter);

module.exports = app;
