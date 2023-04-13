const { Recipe } = require('../../models/recipe');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { path } =
    req.file ||
    'https://res.cloudinary.com/dik8ehacz/image/upload/v1681084289/recipe/18053213-bbf1-48bf-83df-8aba428b35ce_qtqvys1468573168.jpg.jpg';
  const { ingredients = [], ...recipe } = req.body;

  const newIngredients = ingredients.map((ingredient) => ({
    id: new ObjectId(ingredient.id),
    measure: ingredient.measure,
  }));

  const result = await Recipe.create({
    owner,
    thumb: path,
    preview: path,
    ...recipe,
    ingredients: newIngredients,
  });

  const recipesList = await Recipe.find({ owner });
  if (recipesList.length === 10) {
    return res
      .status(201)
      .json({ result, message: 'Yuhu, you already have 10 recipes' }); // При додаванні 10-го рецепту!!!!!
  }
  res.status(201).json(result);
};
module.exports = addOwnRecipes;
