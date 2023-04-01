const { sendSubscriptionVerifyEmail, HttpError } = require("../../helpers");
const { Subscription } = require("../../models/subscription");

const subscribeUser = async (req, res) => {
    const { email } = req.body;
    const isSubsribed = await Subscription.findOne({ email });
    if (isSubsribed) {
        throw HttpError(400, "This user is already subscribed");
    }

    await Subscription.create({ email });
    await sendSubscriptionVerifyEmail(email);

    res.status(201).json("email was subscribed");

};
// написание письма User о подписке на новости

module.exports = subscribeUser;
