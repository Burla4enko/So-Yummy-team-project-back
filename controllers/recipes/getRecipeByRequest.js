const { Recipe } = require("../../models/recipe");

const getRecipeByRequest = async (req, res) => {
  const { query } = req.query;
  const searchRecipe = await Recipe.find({ $text: { $search: query } });

  return res.json({
    searchRecipe,
  });
};

module.exports = getRecipeByRequest;
