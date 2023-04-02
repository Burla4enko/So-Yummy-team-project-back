const sendEmail = require("./sendEmail");

const { BASE_URL } = process.env;

const sendSubsciptonVerifyEmail = async (email, id) => {
  const subscriptionVerifyEmail = {
    to: email,
    subject: "Welcome to SoYummy Recipe App Newsletter",
    html: `<html>
        <body>
          <h1>Welcome to SoYummy Recipe App Newsletter!</h1>
          <p>Thank you for subscribing to the SoYummy Recipe App Newsletter! You'll now receive the latest recipes, cooking tips, and updates straight to your inbox.</p>
          <p>If you no longer wish to receive our newsletter, you can unsubscribe at any time by clicking on the link below:</p>
          <p><a href="${BASE_URL}/api/auth/unsubscribe/${id}">Unsubscribe</a></p>
          <p>Thank you for being a part of our community.</p>
          <p>Best regards,<br>The SoYummy Team</p>
        </body>
      </html>`,
  };

  return await sendEmail(subscriptionVerifyEmail);
};

module.exports = sendSubsciptonVerifyEmail;
