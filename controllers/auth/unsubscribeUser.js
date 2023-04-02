const { Subscription } = require("../../models/subscription");
const { HttpError } = require("../../helpers");

const unsubscribeUser = async (req, res) => {
  const { id } = req.params;
  const isSubsribed = await Subscription.findOne({ id });
  if (!isSubsribed) {
    throw HttpError(404, "This user is already unsubscribed");
  }

  await Subscription.findOneAndRemove({ id });

  res.json("User unsubscribed");
};

module.exports = unsubscribeUser;
