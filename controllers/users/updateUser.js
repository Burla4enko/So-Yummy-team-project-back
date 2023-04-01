const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const updateUser = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    throw HttpError(400, "missing fields");
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });
  res.json(user);
};
// обновить данные пользователя

module.export = updateUser;
