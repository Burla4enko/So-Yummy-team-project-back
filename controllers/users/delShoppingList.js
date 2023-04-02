const { ShoppingList } = require("../../models/shopping-list");
const { NotFound } = require("http-errors");

const delShoppingList = async (req, res) => {
  // getting user Id from authenticate
  const { _id: owner } = req.user;
  // getting ingredient Id from req.body of post query
  const { ingredientId } = req.body;
};
// удалить продукт из списка покупок
module.exports = delShoppingList;
