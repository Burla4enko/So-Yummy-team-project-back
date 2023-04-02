const { User } = require("../../models/user");

const logout = async (req, res) => {
  const [, token] = req.headers.authorization.split(" ");
  const newTokens = req.user.token.filter((item) => item !== token);

  await User.findByIdAndUpdate(req.user._id, { token: newTokens });
  res.json({ massage: "Logout success" });
};

module.exports = logout;
