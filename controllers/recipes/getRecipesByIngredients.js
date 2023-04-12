const { Recipe } = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
const { HttpError } = require("../../helpers");

const getRecipesByIngredients = async (req, res) => {
  const { page = 1, limit = 6, query } = req.query;
  const skip = (page - 1) * limit;
  const result = await Ingredient.find({
    $text: { $search: query },
  });
  if (result.length === 0) {
    throw HttpError(404, "ingredient not found");
  }
  // const ingredientId = result[0]._id;
  const ingredientsId = result.map((item) => item._id);

  const value = await Recipe.find(
    { "ingredients.id": { $in: ingredientsId } },
    "",
    { skip, limit }
  );
  if (value.length === 0) {
    throw HttpError(404, "recipe not found");
  }
  return res.json(value);
};

module.exports = getRecipesByIngredients;
