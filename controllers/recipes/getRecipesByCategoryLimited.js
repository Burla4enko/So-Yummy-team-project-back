const { Recipe } = require("../../models/recipe");
const { capitalizeFirstLetter, HttpError } = require("../../helpers");

const getRecipesByCategoryLimited = async (req, res) => {
  const category = capitalizeFirstLetter(req.params.category);
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

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = getRecipesByCategoryLimited;
