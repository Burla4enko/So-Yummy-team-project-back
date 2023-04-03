const { Recipe } = require('../../models/recipe');
const { Ingredient } = require('../../models/ingredient');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { path } = req.file;
  const { ...recipe } = req.body;
  const ingredients = [
    '640c2dd963a319ea671e377f',
    '640c2dd963a319ea671e36e4',
    '640c2dd963a319ea671e377e',
  ]; // потім деструктуризувати з req.body дивлячись які дані будуть приходити//

  // додати перевірку на валідність Object Id

  const ingredientsList = await Ingredient.find({
    _id: { $in: ingredients.map((id) => new ObjectId(id)) },
  });
  const result = await Recipe.create({
    owner,
    thumb: path,
    ...recipe,
    ingredients: ingredientsList,
  });
  const recipesList = await Recipe.find({ owner });
  if (recipesList.length === 10) {
    res.json({ message: 'Yuhu, you already have 10 recipes' }); // При додаванні 10-го рецепту!!!!!
  }
  res.status(201).json(result);
};

module.exports = addOwnRecipes;
