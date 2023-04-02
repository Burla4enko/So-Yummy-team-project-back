const { getUserDaysInApp } = require("../../helpers");
const { Recipe } = require("../../models/recipe");

const getUserDetails = async (req, res) => {
    const { _id: owner } = req.user;
    const daysInApp = getUserDaysInApp(req.user.createdAt);
    const favoriteRecipes = req.user.favorites.length;
    const ownRecipes = await (await Recipe.find({ owner })).length;
    res.json({daysInApp, favoriteRecipes, ownRecipes});
}

module.exports = getUserDetails;