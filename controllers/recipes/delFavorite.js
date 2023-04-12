const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const delFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await Recipe.findByIdAndUpdate(
    { _id: id },
    { $pull: { favorites: owner } },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }

  if (result.favorites.indexOf(id) === -1) {
    throw HttpError(404, "Already removed");
  }

  res.json({ message: "Removed from favorites" });
};
// удалить рецепт из "избранного"

module.exports = delFavorite;
