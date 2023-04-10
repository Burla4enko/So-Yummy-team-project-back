const { ShoppingList } = require("../../models/shopping-list");

const addShoppingList = async (req, res) => {
  // getting user Id from authenticate
  const { _id: owner } = req.user;

  // getting ingredient Id from req.body of post query
  const { ingredientId, ingredientQuantity } = req.body;

  // we try to update existing document in DB (using push). If there is no such document (there is no doc with current "owner field"), this doc will be created.
  const result = await ShoppingList.findOneAndUpdate(
    { owner },
    {
      $push: {
        list: {
          ingredientId,
          ingredientQuantity,
        },
      },
    },

    { upsert: true, new: true, projection: { list: { $slice: -1 } } }
  ).populate("list.ingredientId", { ttl: 1, thb: 1 });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};
// добавить продукт к списку покупок

module.exports = addShoppingList;
