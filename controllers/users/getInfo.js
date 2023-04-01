const getInfo = async (req, res) => {
  res.json(req.user);
};
// получить данные пользователя

module.exports = getInfo;
