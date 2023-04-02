const express = require("express");
const ctrl = require("../../controllers/recipes");
// const { authenticate, uploadCloud } = require("../../middlewares");
// const { schemasJoi } = require("../../models/user");

const router = express.Router();

router.get("/category-list", ctrl.getCategoryList);
// - получить список категорий (возможно, выбрать из БД в массив все имеющиеся категории в рецептах, оставить в массиве уникальные значения, вывести их отсортировав)

router.get("/main-page", ctrl.getRecipesByCategory);
// - получить рецепты по категориям для главной страницы

router.get("/:category", ctrl.getRecipesByCategoryLimited);
// - получить рецепты по категориям по 8 шт., над названием подумайте :)

router.get("/byId/:id", ctrl.getRecipeById);
// - получить рецепт по id

router.get("/search", ctrl.getRecipeByRequest);
// - поиск рецептов

router.get("/ingredients", ctrl.getRecipesByIngredients);
// - поиск рецептов по игредиентам

router.get("/ingredients/list", ctrl.getIngredientsList);
// - вывести список ингредиентов

router.get("/popular-recipe", ctrl.getPopularRecipes);
// - вывод популярных рецептов

module.exports = router;
