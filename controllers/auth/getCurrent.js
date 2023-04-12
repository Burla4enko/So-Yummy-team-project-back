const getCurrent = async (req, res) => {
  const {_id, name, email, avatarURL } = req.user;
  res.json({ id: _id, name, email, avatarURL });
};

module.exports = getCurrent;
