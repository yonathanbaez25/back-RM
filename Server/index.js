const app = require("./src/app");
require("dotenv").config();
const { conn } = require("./src/DB_connection");
const { PORT } = process.env;

app.listen(PORT, () => {
  conn.sync({ force: true }),
    console.log(`Server listening on http://localhost:${PORT}`);
});
