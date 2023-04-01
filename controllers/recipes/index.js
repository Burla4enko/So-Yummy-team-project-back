const ctrlWrapper = require("../../helpers");
const getCategoryList = require("./getCategoryList");
const getRecipesByCategory = require("./getRecipesByCategory");
const getRecipesByCategoryLimited = require("./getRecipesByCategoryLimited");
const getRecipeById = require("./getRecipeById");
const getRecipeByRequest = require("./getRecipeByRequest");
const getRecipesByIngredients = require("./getRecipesByIngredients");
const getPopularRecipes = require("./getPopularRecipes");

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
