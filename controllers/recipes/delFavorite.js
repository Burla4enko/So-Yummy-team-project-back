const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const delFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await Recipe.findOneAndUpdate(
    { _id: id },
    { $pull: { favorites: owner } },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
// удалить рецепт из "избранного"

module.exports = delFavorite;
