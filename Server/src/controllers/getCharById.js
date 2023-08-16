const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(URL + id);
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCharacterById;
