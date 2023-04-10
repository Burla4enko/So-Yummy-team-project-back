const { ObjectId } = require("mongodb");
const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipeById = async (req, res) => {
  const { id } = req.params;

  const recipe = await Recipe.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_nfo",
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingr_nfo",
                    {
                      $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingr_nfo", "ingredients.id"],
    },
  ]);

  if (!recipe.length) throw HttpError(404, "Not found");

  res.status(200).json({
    data: {
      recipe: recipe[0],
    },
  });
};

module.exports = getRecipeById;
