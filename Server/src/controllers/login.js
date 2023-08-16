const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email) {
    return res.status(404).send("Faltan datos");
  }
  if (!password) {
    return res.status(404).send("Faltan datos");
  }
  try {
    const user = await User.findAll({
      where: { email },
    });
    const userPassword = user[0].dataValues.password;
    if (userPassword === password) {
      return res.json({ access: true });
    } else {
      return res.json({ access: false });
    }
  } catch (error) {
    return res.status(404).json({ err: error.message });
  }
};

module.exports = login;
