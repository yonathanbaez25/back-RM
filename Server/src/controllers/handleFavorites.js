// let myFavorites = [];

// const postFav = (req, res) => {
//   myFavorites.push(req.body);
//   return res.status(200).json(myFavorites);
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;
//   console.log(myFavorites);
//   const filterCharacter = myFavorites.filter((ch) => {
//     ch.id !== Number(id);
//     console.log(ch.id);
//     console.log(2023);
//   });
//   console.log(filterCharacter);
//   myFavorites = filterCharacter;
//   return res.status(200).json(filterCharacter);
// };

// module.exports = {
//   postFav,
//   deleteFav,
// };
