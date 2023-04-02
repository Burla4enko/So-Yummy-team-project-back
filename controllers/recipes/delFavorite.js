const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const delFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await User.findOneAndUpdate(
    { _id: owner },
    { $pull: { favorites: id } },
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
