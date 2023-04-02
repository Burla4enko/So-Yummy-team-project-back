const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");

const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");
const { BASE_URL } = process.env;

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

  const mailHtml = `
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        border-radius: 15px;
        color: #fafafa;
        background-color: #2A2C36;
      "
    >
      <p>
        Congratulations! You have signed up for So Yummy. Follow the link to
        complete registration
      </p>
      <a
        target="_blank"
        href="${BASE_URL}/api/auth/verify/${verificationToken}"
        style="
          box-sizing: border-box;
          width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 12px;
          padding: 20px;
          border-radius: 6px;
          background-color: #8baa36;
          text-decoration: none;
          color: #fafafa;
        "
        target="_blank"
        href="${BASE_URL}/api/auth/verify/${verificationToken}"
        >Click to verify email</a
      >
    </div>
   `;

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: mailHtml,
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
