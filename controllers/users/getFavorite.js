const { HttpError } = require("../../helpers");
const { Recipe } = require("../../models/recipe");

const getFavorite = async (req, res) => {
  const { _id } = req.user;

  const result = await Recipe.find({ favorites: _id });

  if (result.length === 0) {
    throw HttpError(404, "The user hasn't added anything to favorites yet");
  }

  res.json(result);
};
// получить все "избранные" рецепты

module.exports = getFavorite;
