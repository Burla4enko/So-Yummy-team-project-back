const { Recipe } = require("../models/recipe");

const getCategoryList = async (req, res) => {
  const allRecipesCategoryList = [];

  baseResult = await Recipe.find({}, "category -_id").sort({
    category: 1,
  });

  baseResult.map((item) => {
    allRecipesCategoryList.push(item["category"]);
  });

  const uniqueCategoryList = allRecipesCategoryList.filter(
    (category, index, array) => array.indexOf(category) === index
  );

  const finalResult = uniqueCategoryList.slice(page - 1, limit);

  return res.status(200).json(finalResult);
};
module.exports = getCategoryList;
