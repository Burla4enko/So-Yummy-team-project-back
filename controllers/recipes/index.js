const { ctrlWrapper } = require("../../helpers");

const getCategoryList = require("./getCategoryList");
const getRecipesByCategory = require("./getRecipesByCategory");
const getRecipesByCategoryLimited = require("./getRecipesByCategoryLimited");
const getRecipeById = require("./getRecipeById");
const getRecipeByRequest = require("./getRecipeByRequest");
const getIngredientsList = require("./getIngredientsList");
const getPopularRecipes = require("./getPopularRecipes");
const addFavorite = require("./addFavorite");
const delFavorite = require("../recipes/delFavorite");

module.exports = {
  getCategoryList: ctrlWrapper(getCategoryList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipesByCategoryLimited: ctrlWrapper(getRecipesByCategoryLimited),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipeByRequest: ctrlWrapper(getRecipeByRequest),
  getIngredientsList: ctrlWrapper(getIngredientsList),
  getPopularRecipes: ctrlWrapper(getPopularRecipes),
  addFavorite: ctrlWrapper(addFavorite),
  delFavorite: ctrlWrapper(delFavorite),
};
