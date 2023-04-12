const { ShoppingList } = require("../../models/shopping-list");
const { NotFound } = require("http-errors");

const delShoppingList = async (req, res) => {
  // getting shopping list item ID to delete from req.body
  const { _id: owner } = req.user;
  const { id } = req.body;
  // deleting shopping list item from the database by it's OWN id (not user id, not ingredient id)

  const result = await ShoppingList.updateOne(
    { owner, "list._id": id },
    { $pull: { list: { _id: id } } },
    { new: true }
  );
  if (result.modifiedCount === 0) {
    throw new NotFound("Shopping list item not found");
  }
  if (!result) {
    throw new NotFound("Not found, can't delete");
  }

  res.status(200).json({
    code: 200,
    message: "shopping list item has been deleted",
    // !! added result so I can delete it from redux
    data: { result },
  });
};
// удалить продукт из списка покупок
module.exports = delShoppingList;
