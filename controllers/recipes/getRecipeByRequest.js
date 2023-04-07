const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");
const { Ingredient } = require("../../models/ingredient");

const getRecipeByRequest = async (req, res) => {
  const { filter, query } = req.query;
  console.log("filter", filter, "query", query);

  if (filter === "title") {
    const recipes = await Recipe.find({ $text: { $search: query } });
    if (!recipes.length) {
      throw HttpError(404, "recipe not found");
    }
    return res.json(recipes);
  }

  if (filter === "ingredients") {
    const ingredients = query.split(",");
    const invalidIngredients = [];
    const ingredientsIds = [];
    await Promise.all(
      await ingredients.map(async (ingredient) => {
        console.log(ingredient, "before");
        const { _id: id } = await Ingredient.findOne({
          ttl: { $regex: ingredient, $options: "i" },
        });
        if (!id) {
          console.log("invalid ingr", ingredient);
          invalidIngredients.push(ingredient);
        } else {
          ingredientsIds.push(id);
        }
      })
    );

    console.log("ingredientsId", ingredientsIds);

    if (invalidIngredients.length) {
      throw HttpError(
        404,
        `ingredients ${invalidIngredients.join(", ").slice(-1, 0)} not found`
      );
    }
    const recipes = await Recipe.find({
      "ingredients.id": { $all: ingredientsIds },
    });
    if (!recipes.length) {
      throw HttpError(404, "recipe not found");
    }
    res.json(recipes);
  }
};

module.exports = getRecipeByRequest;
