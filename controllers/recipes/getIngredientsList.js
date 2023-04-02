const { Ingredient } = require("../../models/ingredient");

const getIngredientsList = async (req, res) => {
  const { page = 1, limit = 999 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Ingredient.find({}, "", { skip, limit });
  res.json(result);
};

module.exports = getIngredientsList;
