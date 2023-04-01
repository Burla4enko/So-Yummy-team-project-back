const { Recipe } = require('../../models/recipe');
const { HttpError } = require('../../helpers');

const getOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Recipe.find({ owner });
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};
// получить рецепты пользователя

module.exports = getOwnRecipes;
