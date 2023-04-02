const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const addFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await User.findOneAndUpdate(
    { _id: owner },
    { $push: { favorites: id } },
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
