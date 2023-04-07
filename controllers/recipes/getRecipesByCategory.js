const { Recipe } = require("../../models/recipe");

const getRecipesByCategory = async (req, res) => {
  const categories = req.query.categories.split(",");
  const { amount } = req.query;
  const recipes = {};
  await Promise.all(
    categories.map(async (category) => {
      const recipesList = await Recipe.find({ category }).limit(amount);
      recipes[category] = [...recipesList];
    })
  );

  res.status(200).json(recipes);
};

module.exports = getRecipesByCategory;
