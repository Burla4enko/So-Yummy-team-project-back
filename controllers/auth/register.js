const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");

const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");
const { verifyMail } = require("../../helpers/mails")

const register = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) throw HttpError(409, "Email in use");

  const hashPass = await bcrypt.hash(password, 10);
  const verificationToken = uuid();

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: verifyMail(verificationToken),
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

module.exports = register;
