const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  // if (!email || email.length === 0) {
  //   return res.status(404).send("Faltan datos");
  // }
  // if (!password || password.length === 0) {
  //   return res.status(404).send("Faltan datos");
  // }

  console.log(email, password);
  try {
    const user = await User.create({ email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = postUser;
