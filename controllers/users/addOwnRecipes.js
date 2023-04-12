const { Recipe } = require("../../models/recipe");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const {
    path = "https://asset.cloudinary.com/dik8ehacz/04185f05f6e2f0607f21c67b9b1eab64",
  } = req.file;
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
      .json({ result, message: "Yuhu, you already have 10 recipes" }); // При додаванні 10-го рецепту!!!!!
  }
  res.status(201).json(result);
};
module.exports = addOwnRecipes;
