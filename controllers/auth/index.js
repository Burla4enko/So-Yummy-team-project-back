const { ctrlWrapper } = require("../../helpers");

const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const resendVerifyEmail = require("./resendVerifyEmail");
const verifyEmail = require("./verifyEmail");
const subscribeUser = require("./subscribeUser");
const unsubscribeUser = require("./unsubscribeUser");

module.exports = {
    getCurrent: ctrlWrapper(getCurrent),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    register: ctrlWrapper(register),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
    subscribeUser: ctrlWrapper(subscribeUser),
    unsubscribeUser: ctrlWrapper(unsubscribeUser),
  
};
