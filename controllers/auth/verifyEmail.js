const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) throw HttpError(404, "User not found");
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });
  user.token.push(token);
  await User.findByIdAndUpdate(user._id, { token: user.token });

  res.json({
    message: "Verification successful",
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};
// при успішному підтвердженні -> отримує token -> frontend main

module.exports = verifyEmail;
