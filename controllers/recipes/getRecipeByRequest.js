const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipeByRequest = async (req, res) => {
  const { query } = req.query;
  const searchRecipe = await Recipe.find({ $text: { $search: query } });
  if (searchRecipe.length === 0) {
    throw HttpError(404, "recipe not found");
  }
  return res.json(searchRecipe);
};

module.exports = getRecipeByRequest;
