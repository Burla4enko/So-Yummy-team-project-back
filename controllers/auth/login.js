const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email or password is wrong");
  if (!user.verify) throw HttpError(401, "Email not verified");
  const comparePass = await bcrypt.compare(password, user.password);
  if (!comparePass) throw HttpError(401, "Email or password is wrong");

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
  user.token.push(token);
  await User.findByIdAndUpdate(user._id, { token: user.token });
  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = login;
