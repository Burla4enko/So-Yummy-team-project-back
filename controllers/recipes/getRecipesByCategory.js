const { Recipe } = require("../../models/recipe");

const getRecipesByCategory = async (req, res) => {
  const recipes = await Recipe.find({
    category: ["Breakfast", "Miscellaneous", "Chicken", "Dessert"],
  })
    .skip(50)
    .select("_id title category thumb");

  const filteredRecipies = [[], [], [], []];
  const [BreakfastArr, MiscellArr, ChickenArr, DessertArr] = filteredRecipies;

  for (const recipe of recipes) {
    if (recipe.category === "Breakfast" && BreakfastArr.length < 4)
      BreakfastArr.push(recipe);

    if (recipe.category === "Miscellaneous" && MiscellArr.length < 4)
      MiscellArr.push(recipe);

    if (recipe.category === "Chicken" && ChickenArr.length < 4)
      ChickenArr.push(recipe);

    if (recipe.category === "Dessert" && DessertArr.length < 4)
      DessertArr.push(recipe);
  }

  res.status(200).json(filteredRecipies);
};

module.exports = getRecipesByCategory;
