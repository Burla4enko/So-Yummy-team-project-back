const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const categoryList = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

// регулярные выражения добавите по необходимости
// const regExp...

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
    },
    category: {
      type: String,
      enum: categoryList,
      default: "Breakfast",
    },
    area: {
      type: String,
      default: "",
    },
    instructions: {
      type: String,
      required: [true, "Instructions is required"],
      minlength: 20,
    },
    description: {
      type: String,
      default: "",
    },
    thumb: {
      type: String,
      //   default: "", - создать default заглушку при создании
    },
    preview: {
      type: String,
      //   default: "", - создать default заглушку при создании
    },
    time: {
      type: String,
      required: [true, "time is required"],
    },
    popularity: {
      type: Number,
      default: null,
    },
    favorites: {
      type: Array,
      default: undefined,
    },
    likes: {
      type: Array,
      default: undefined,
    },
    youtube: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: undefined,
    },
    ingredients: {
      type: Array,
      required: [true, "ingredients is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

recipeSchema.post("save", handleMongooseError);

const addRecipeSchema = Joi.object({
  title: Joi.string().min(3).required(),
  category: Joi.string()
    .required()
    .valid(...categoryList),
  area: Joi.string(),
  instructions: Joi.string().required().min(20),
  description: Joi.string(),
  thumb: Joi.string(),
  preview: Joi.string(),
  time: Joi.string().required(),
  popularity: Joi.number(),
  favorites: Joi.array(),
  likes: Joi.array(),
  youtube: Joi.string(),
  tags: Joi.array(),
  ingredients: Joi.array().required(),
});

// const validationSchema2 = Joi.object({});

// const validationSchema3 = Joi.object({});

const schemasJoi = { addRecipeSchema };
// ...схемы валидации

const Recipe = model("recipe", recipeSchema);

module.exports = { Recipe, schemasJoi };
