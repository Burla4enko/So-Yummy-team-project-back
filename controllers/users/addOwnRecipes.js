const { Recipe } = require('../../models/recipe');
const { Ingredient } = require('../../models/ingredient');

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { path } = req.file;
  const { ingredients, ...recipe } = req.body;
  console.log(...ingredients);
  const ingredientList = await Ingredient.find({ ...ingredients });
  //   console.log(ingredientList);
  const result = await Recipe.create({ owner, thumb: path, ...recipe });
  res.status(201).json(result);
};
// добавить рецепты пользователя
module.exports = addOwnRecipes;
