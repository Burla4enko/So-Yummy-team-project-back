const { Recipe } = require("../../models/recipe");

const getPopularRecipes = async (req, res) => {
  const result = await Recipe.find({});
  const data = result
    .sort((a, b) => b.favorites.length - a.favorites.length)
    .slice(0, 5);

  res.json(data);
};
module.exports = getPopularRecipes;
