const { Recipe } = require('../../models/recipe');

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Recipe.create({ ...req.body, owner });
  res.status(201).json(result);
};
// добавить рецепты пользователя
module.exports = addOwnRecipes;
