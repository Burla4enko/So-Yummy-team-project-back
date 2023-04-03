const { Recipe } = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

const getRecipesByIngredients = async (req, res) => {
  const { query } = req.query;
  const result = await Ingredient.find({
    $text: { $search: query },
  });

  // const ingredientId = result[0]._id;
  const ingredientsId = result.map((item) => item._id);

  const value = await Recipe.find({ "ingredients.id": { $in: ingredientsId } });

  return res.json(value);
};

module.exports = getRecipesByIngredients;
