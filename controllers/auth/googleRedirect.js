const queryString = require("query-string");
const axios = require("axios");

const signInWithAGoogleAccount = require("./signInWithAGoogleAccount")

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const generator = require("generate-password");
// const { User } = require("../../models/user");
// const { HttpError } = require("../../helpers");

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);

  const code = urlParams.code;

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL}/api/auth/google-redirect`,
      grant_type: "authorization_code",
      code,
    },
  });

  const userData = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: { Authorization: `Bearer ${tokenData.data.access_token}` },
  });

    const token = await signInWithAGoogleAccount(userData.data);

    return res.redirect(
      `${process.env.FRONTEND_URL}?token=${token}&name=${userData.data.name}&email=${userData.data.email}`
    );
};

module.exports = googleRedirect;

// return res.redirect(
//   `${process.env.FRONTEND_URL}/google-redirect/?accessToken=${accessToken}&refreshToken=${refreshToken}`
// );

// стоворити сторінку на frontend - google-redirect - "почекайте іде перенаправлення запиту"
// взяти токен з квері параметрів
// !!!!!!!!!!! додати шлях ${process.env.BASE_URL}/api/auth/google-redirect/ до https://console.cloud.google.com/apis/credentials => OAuth 2.0 Client IDs (So-Yummy) => Authorized redirect URIs

// Об’єкт userData.data:
// {
//   id: '112020904817975226943',
//   email: 'ajax.amigos@gmail.com',
//   verified_email: true,
//   name: 'Serhii Ryabko',
//   given_name: 'Serhii',
//   family_name: 'Ryabko',
//   picture: 'https://lh3.googleusercontent.com/a/AGNmyxYh2PgNyE3zkltY4Oh8Uoft4jds6vNsMPJ2fWtb=s96-c',
//   locale: 'uk'
// }
