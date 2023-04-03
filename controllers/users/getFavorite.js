const { Recipe } = require("../../models/recipe");

const getFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { userId } = req.params;

  const result = await Recipe.find({ owner }).populate("favorites", userId);

  res.json(result);
};
// получить все "избранные" рецепты

module.exports = getFavorite;
