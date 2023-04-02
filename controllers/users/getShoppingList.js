const { ShoppingList } = require("../../models/shopping-list");

const getShoppingList = async (req, res) => {
  const { _id } = req.user;

  const completeShoppingList = await ShoppingList.find(
    { owner: _id },
    "-updatedAt, -createdAt, -__v"
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result: completeShoppingList,
    },
  });
};
// получение продуктов из списка покупок
module.export = getShoppingList;
