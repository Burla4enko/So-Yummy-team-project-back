const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipeByRequest = async (req, res) => {
  const { page = 1, limit = 6, query } = req.query;
  const skip = (page - 1) * limit;
  const searchRecipe = await Recipe.find({ $text: { $search: query } }, "", {
    skip,
    limit,
  });
  if (searchRecipe.length === 0) {
    throw HttpError(404, "recipe not found");
  }
  return res.json(searchRecipe);
};

module.exports = getRecipeByRequest;
