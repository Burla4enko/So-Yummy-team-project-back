const { Recipe } = require("../../models/recipe");

const getCategoryList = async (req, res) => {
  const allRecipesCategoryList = [];

  const baseResult = await Recipe.find({}, "category -_id").sort({
    category: 1,
  });

  baseResult.map((item) => {
    return allRecipesCategoryList.push(item.category);
  });

  const uniqueCategoryList = allRecipesCategoryList.filter(
    (category, index, array) => array.indexOf(category) === index
  );

  res.status(200).json(uniqueCategoryList);
};

module.exports = getCategoryList;
