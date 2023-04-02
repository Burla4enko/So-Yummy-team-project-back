const { ShoppingList } = require("../../models/shopping-list");

const addShoppingList = async (req, res) => {
  // getting user Id from authenticate
  const { _id: owner } = req.user;

  // getting ingredient Id from req.body of post query
  const { ingredientId, ingredientQuantity } = req.body;

  // creating new item in ShoppingList collection
  const result = await ShoppingList.create({
    ingredientId,
    ingredientQuantity,
    owner,
  });
  // sending 201 to front-end
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};
// добавить продукт к списку покупок

module.export = addShoppingList;
