const { User } = require("../../models/user");

const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { token: "" });
  res.json({ massage: "Logout success" });
};

module.exports = logout;
