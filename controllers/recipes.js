const { Recipe } = require("../models/recipe");
const { HttpError, ctrlWrapper } = require("../helpers");

const getCategoryList = async (req, res) => {};

const getRecipesByCategory = async (req, res) => {};

const getRecipesByCategoryLimited = async (req, res) => {};

const getRecipeById = async (req, res) => {};

const getRecipeByRequest = async (req, res) => {};

const getRecipesByIngredients = async (req, res) => {};

const getIngredientsList = async (req, res) => {};

const getPopularRecipes = async (req, res) => {};

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipesByCategoryLimited: ctrlWrapper(getRecipesByCategoryLimited),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipeByRequest: ctrlWrapper(getRecipeByRequest),
  getRecipesByIngredients: ctrlWrapper(getRecipesByIngredients),
  getIngredientsList: ctrlWrapper(getIngredientsList),
  getPopularRecipes: ctrlWrapper(getPopularRecipes),
};
