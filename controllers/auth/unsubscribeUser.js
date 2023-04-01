const { Subscription } = require("../../models/subscription");
const { HttpError} = require("../../helpers");

const unsubscribeUser = async (req, res) => {

  const { email } = req.params;
  const isSubsribed = await Subscription.findOne({ email: email });
    if (!isSubsribed) {
      throw HttpError(404, "This user is already unsubscribed");
    }
  
    await Subscription.findOneAndRemove({ email });
  
    res.json("User unsubscribed");
};
  
module.exports = unsubscribeUser;