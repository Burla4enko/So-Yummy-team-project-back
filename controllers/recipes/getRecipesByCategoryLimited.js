const { Recipe } = require("../../models/recipe");

const getRecipesByCategoryLimited = async (req, res) => {
    const { category } = req.params;
  console.log(req.params);
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Recipe.find({ category }, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  console.log(result);
  res.json(result);
};

module.exports = getRecipesByCategoryLimited;
