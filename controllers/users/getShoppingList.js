const { ShoppingList } = require("../../models/shopping-list");

// !!!Ingredient is actually used by POPULATE!!!!!
// eslint-disable-next-line no-unused-vars
const { Ingredient } = require("../../models/ingredient");

const getShoppingList = async (req, res) => {
  const { _id } = req.user;

  const completeShoppingList = await ShoppingList.find(
    { owner: _id },
    { updatedAt: 0, createdAt: 0 }
  ).populate("list.ingredientId", { ttl: 1, thb: 1 });

  res.json({
    status: "success",
    code: 200,
    data: {
      result: completeShoppingList,
    },
  });
};
// получение продуктов из списка покупок
module.exports = getShoppingList;
