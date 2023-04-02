const { ctrlWrapper } = require("../../helpers");

const updateUser = require("./updateUser");
const getInfo = require("./getInfo");
const getUserDetails = require('./getUserDetails');
const subscribeUser = require("./subscribeUser");
const getOwnRecipes = require("./getOwnRecipes");
const addOwnRecipes = require("./addOwnRecipes");
const delOwnRecipes = require("./delOwnRecipes");
const getFavorite = require("./getFavorite");
const getShoppingList = require("./getShoppingList");
const addShoppingList = require("./addShoppingList");
const delShoppingList = require("./delShoppingList");

module.exports = {
  updateUser: ctrlWrapper(updateUser),
  getInfo: ctrlWrapper(getInfo),
  getUserDetails: ctrlWrapper(getUserDetails),
  subscribeUser: ctrlWrapper(subscribeUser),
  getOwnRecipes: ctrlWrapper(getOwnRecipes),
  addOwnRecipes: ctrlWrapper(addOwnRecipes),
  delOwnRecipes: ctrlWrapper(delOwnRecipes),
  getFavorite: ctrlWrapper(getFavorite),
  getShoppingList: ctrlWrapper(getShoppingList),
  addShoppingList: ctrlWrapper(addShoppingList),
  delShoppingList: ctrlWrapper(delShoppingList),
};
