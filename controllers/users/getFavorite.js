const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const getFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { userId } = req.params;

  const result = await User.findOne({ _id: userId, owner });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result.favorites);
};
// получить все "избранные" рецепты

module.exports = getFavorite;
