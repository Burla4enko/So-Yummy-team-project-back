const { Schema, model } = require("mongoose");

const schema = Schema({
  ttl: {
    type: String,
    required: true,
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
});

const Ingredient = model("ingredient", schema);

module.exports = {
  Ingredient,
};
