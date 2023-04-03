const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const ingredientSchema = new Schema(
  {
    ttl: {
      type: String,
      required: [true],
    },
    desc: {
      type: String,
    },
    t: {
      type: String,
    },
    thb: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

ingredientSchema.post("save", handleMongooseError);

const Ingredient = model("ingredient", ingredientSchema);

module.exports = { Ingredient };
