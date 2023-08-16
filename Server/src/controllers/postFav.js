const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  console.log(req.body);
  const { name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send("Faltan datos");
  }

  try {
    const postFavorite = await Favorite.findOrCreate({ where: req.body });
    const allFav = await Favorite.findAll();
    return res.status(201).json(allFav);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

module.exports = postFav;
