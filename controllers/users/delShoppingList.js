const { ShoppingList } = require("../../models/shopping-list");
const { NotFound } = require("http-errors");

const delShoppingList = async (req, res) => {
  // getting shopping list item ID to delete from req.body

  const { id } = req.body;
  console.log(` THIS IS ID FOR DELETION - ${id}`);
  // deleting shopping list item drom the database by it's OWN id (not user id, not ingredient id)

  // !! works !!!
  const result = await ShoppingList.updateOne(
    {},
    { $pull: { list: { _id: id } } },
    { new: true }
  );
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
