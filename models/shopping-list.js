const { Schema, model, SchemaTypes } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const shoppingListSchema = new Schema(
  {
    ingredientId: {
      type: SchemaTypes.ObjectId,
      ref: "ingredient",
      required: [true],
    },
    ingredientQuantity: {
      type: String,
      required: [true],
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
      required: [true],
    },
  },
  { versionKey: false, timestamps: true }
);

shoppingListSchema.post("save", handleMongooseError);

const ShoppingList = model("shoppingList", shoppingListSchema);

module.exports = { ShoppingList };
