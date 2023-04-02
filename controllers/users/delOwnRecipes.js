const { Recipe } = require('../../models/recipe');
const { HttpError } = require('../../helpers');

const delOwnRecipes = async (req, res) => {
  const { _id: recipeId } = req.body; //<- отримує ID рецепту//
  const result = await Recipe.findByIdAndRemove(recipeId);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json({ massage: 'Delete success' });
};
// удалить рецепт пользователя
module.exports = delOwnRecipes;
