const express = require('express');
const ctrl = require('../../controllers/users');
const {
  authenticate,
  uploadCloud,
  uploadCloudRecipe,
} = require('../../middlewares');
// const { schemasJoi } = require("../../models/user");

const router = express.Router();

router.patch('/', authenticate, uploadCloud.single('avatar'), ctrl.updateUser);
// - обновление инфо, добaвим после подключения к Cloudinary

router.get('/info', authenticate, ctrl.getInfo);
// - получение инфо о пользователе

router.get('/info/popular', authenticate, ctrl.getInfo);
// - задание со *, вывод ПОЛНОЙ инфо оп опльзователю:  кількість днів він в додатку, кількість доданих рецептів, кількість рецептів до обраних.

router.get('/ownRecipes', authenticate, ctrl.getOwnRecipes);
// - получить рецепты пользователя

router.post(
  '/ownRecipes',
  authenticate,
  uploadCloudRecipe.single('recipeImg'),
  ctrl.addOwnRecipes
);
// - добавить рецепт пользователю

router.delete('/ownRecipes', authenticate, ctrl.delOwnRecipes);
// - удалить рецепт у пользователя

router.get("/favorite", authenticate, ctrl.getFavorite);
// - получение Favorite рецептов пользователя

router.get('/shopping-list', authenticate, ctrl.getShoppingList);
// - получить продукты из списка покупок

router.post('/shopping-list', authenticate, ctrl.addShoppingList);
// - добавить продукты в списка покупок

router.delete('/shopping-list', authenticate, ctrl.delShoppingList);
// - удалить продукты из списка покупок

module.exports = router;
