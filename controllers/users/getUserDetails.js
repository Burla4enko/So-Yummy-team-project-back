const { getUserDaysInApp, HttpError } = require("../../helpers");
const { Recipe } = require("../../models/recipe");

const getUserDetails = async (req, res) => {
    const { _id: owner } = req.user;
    const { query } = req.params;
    if (query === 'days') {
        const daysInApp = getUserDaysInApp(req.user.createdAt);
        res.json({ daysInApp });
    }
    else if (query === 'favorites') {
        const favoriteRecipes = await (await Recipe.find({ favorites:{ $in: [owner]} })).length;
        res.json({ favoriteRecipes });
    }
    else if (query === 'created-recipes') {
        const ownRecipes = await (await Recipe.find({ owner })).length;
        res.json({ ownRecipes });
    }
    else {
        throw HttpError(400, "invalid rout params");
    }

}

module.exports = getUserDetails;