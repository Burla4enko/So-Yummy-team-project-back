const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const addFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await Recipe.findOneAndUpdate(
    { _id: id },
    { $push: { favorites: owner } },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
// добавить рецепт в "избранное"

module.exports = addFavorite;
