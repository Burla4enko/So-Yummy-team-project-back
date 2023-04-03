const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const ingredientSchema = new Schema({
  ttl: {
    type: String,
    minlength: 2,
    required: [true, "Title is required"],
  },
  desc: String,
  t: String,
  thb: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/dwqwy0spx/image/upload/v1680522081/SoYummyStubs/meat_wdeuf6.svg",
  },
});

ingredientSchema.post("save", handleMongooseError);

const addIngredientSchema = Joi.object({
  ttl: Joi.string()
    .min(2)
    .required()
    .messages({ "any.required": "missing required field Title" }),
  desc: Joi.string(),
  t: Joi.string(),
  thb: Joi.string()
    .required()
    .messages({ "any.required": "missing required field Thb" }),
});

const Ingredient = model("ingredient", ingredientSchema);
const schemasJoi = { addIngredientSchema };

module.exports = { Ingredient, schemasJoi };
