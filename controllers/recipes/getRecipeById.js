const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recepie = await Recipe.findById(id);

  if (!recepie) throw HttpError(404, "Not found");

  res.status(200).json({
    data: {
      recepie,
    },
  });
};

module.exports = getRecipeById;
