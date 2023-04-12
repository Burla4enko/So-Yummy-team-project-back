const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const delFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const isAlreadyAdded = await Recipe.findOne({
    $and: [{ _id: id }, { favorites: owner }],
  });

  if (!isAlreadyAdded) {
    throw HttpError(404, "This recipe is not in favorites.");
  }

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

  res.json({ message: "Removed from favorites" });
};
// удалить рецепт из "избранного"

module.exports = delFavorite;
