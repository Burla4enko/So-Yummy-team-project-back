const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { uuid } = require("uuidv4");
require("dotenv").config();
const { User } = require("../models/user");
const { HttpError, ctrlWrapper } = require("../helpers");

const { SECRET_KEY, BASE_URL } = process.env;

const register = async (req, res) => {}; // регистрация пользователя

const verifyEmail = async (req, res) => {}; // верификация (подтверждение) email пользователя

const resendVerifyEmail = async (req, res) => {}; // переотправка запроса на верификацию email

const login = async (req, res) => {}; // логин (вход) пользователя

const getCurrent = async (req, res) => {}; // проверка подлинности пользователя после перезапуска страницы/приложения

const logout = async (req, res) => {}; // логаут (выход) пользователя, закрытие сессии (удаление токена)

const getInfo = async (req, res) => {}; // получение инфо о пользователе

const updateUser = async (req, res) => {}; // изменение имени, аватара (после подключения к Cloudinary)

const subscribeUser = async (req, res) => {}; // написание письма User о подписке на новости

module.exports = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  getInfo: ctrlWrapper(getInfo),
  updateUser: ctrlWrapper(updateUser),
  subscribe: ctrlWrapper(subscribeUser),
};
