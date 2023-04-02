const { Recipe } = require("../../models/recipe");
const {capitalizeFirstLetter} = require("../../helpers/capitalizeFirstLetter")

const getRecipesByCategoryLimited = async (req, res) => {
  const category = capitalizeFirstLetter(req.params.category);
  console.log(capitalizeFirstLetter(req.params.category));
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Recipe.find(
    { category },
    "title  preview",
    {
      skip,
      limit,
    },
    " -createdAt -updatedAt"
  );
  console.log(result);
  res.json(result);
};

module.exports = getRecipesByCategoryLimited;
