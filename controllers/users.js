const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { uuid } = require('uuidv4');
require('dotenv').config();
const { User } = require('../models/user');
const { Recipe } = require('../models/recipe');
const { HttpError, ctrlWrapper } = require('../helpers');

const { SECRET_KEY, BASE_URL } = process.env;

const updateUser = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    throw HttpError(400, 'missing fields');
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });
  res.json(user);
};
// обновить данные пользователя

const getInfo = async (req, res) => {
  res.json(req.user);
};
// получить данные пользователя

const subscribeUser = async (req, res) => {};
// подписка пользователя на рассылку от SoYummy

const getOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Recipe.find({ owner });
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};
// получить рецепты пользователя

const addOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Recipe.create({ ...req.body, owner });
  res.status(201).json(result);
};
// добавить рецепты пользователя

const delOwnRecipes = async (req, res) => {
  const { _id: recipeId } = req.body; //<- отримує ID рецепту//
  const result = await Recipe.findByIdAndRemove(recipeId);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json({ massage: 'Delete success' });
};
// удалить рецепт пользователя

const addFavorite = async (req, res) => {};
// добавить рецепт в "избранное"

const getFavorite = async (req, res) => {};
// получить все "избранные" рецепты

const delFavorite = async (req, res) => {};
// удалить рецепт из "избранного"

const getShoppingList = async (req, res) => {};
// получение продуктов из списка покупок

const addShoppingList = async (req, res) => {};
// добавить продукт к списку покупок

const delShoppingList = async (req, res) => {};
// удалить продукт из списка покупок

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
