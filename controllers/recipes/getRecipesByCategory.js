const { Recipe } = require("../../models/recipe");

const getRecipesByCategory = async (req, res) => {
  const recipes = await Recipe.find({
    category: ["Breakfast", "Dessert", "Miscellaneous", "Chicken"],
  }).select("_id title category thumb");

  const filteredRecipies = [[], [], [], []];
  const [BreakfastArr, DessertArr, MiscellArr, ChickenArr] = filteredRecipies;

  for (const recipe of recipes) {
    if (recipe.category === "Breakfast" && BreakfastArr.length < 4)
      BreakfastArr.push(recipe);

    if (recipe.category === "Dessert" && DessertArr.length < 4)
      DessertArr.push(recipe);

    if (recipe.category === "Miscellaneous" && MiscellArr.length < 4)
      MiscellArr.push(recipe);

    if (recipe.category === "Chicken" && ChickenArr.length < 4)
      ChickenArr.push(recipe);
  }

  const recipesByCategory = filteredRecipies.flatMap((item) => item);

  res.status(200).json(recipesByCategory);
};

module.exports = getRecipesByCategory;
