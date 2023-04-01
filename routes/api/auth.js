const express = require("express");
const ctrl = require("../../controllers/auth/");
const { validateBody, authenticate } = require("../../middlewares");
const { schemasJoi } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemasJoi.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemasJoi.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schemasJoi.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.post("/subscribe", ctrl.subscribeUser);
// - подписка для рассылки на почту

router.get("/unsubscribe/:email", ctrl.unsubscribeUser);
// - отписка от рассылки на почту

module.exports = router;
