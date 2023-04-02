const { ctrlWrapper } = require('../../helpers');

const updateUser = require('./updateUser');
const getInfo = require('./getInfo');
const subscribeUser = require('./subscribeUser');
const getOwnRecipes = require('./getOwnRecipes');
const addOwnRecipes = require('./addOwnRecipes');
const delOwnRecipes = require('./delOwnRecipes');
const addFavorite = require('./addFavorite');
const getFavorite = require('./getFavorite');
const delFavorite = require('./delFavorite');
const getShoppingList = require('./getShoppingList');
const addShoppingList = require('./addShoppingList');
const delShoppingList = require('./delShoppingList');

module.exports = {
  updateUser: ctrlWrapper(updateUser),
  getInfo: ctrlWrapper(getInfo),
  subscribeUser: ctrlWrapper(subscribeUser),
  getOwnRecipes: ctrlWrapper(getOwnRecipes),
  addOwnRecipes: ctrlWrapper(addOwnRecipes),
  delOwnRecipes: ctrlWrapper(delOwnRecipes),
  addFavorite: ctrlWrapper(addFavorite),
  getFavorite: ctrlWrapper(getFavorite),
  delFavorite: ctrlWrapper(delFavorite),
  getShoppingList: ctrlWrapper(getShoppingList),
  addShoppingList: ctrlWrapper(addShoppingList),
  delShoppingList: ctrlWrapper(delShoppingList),
};
