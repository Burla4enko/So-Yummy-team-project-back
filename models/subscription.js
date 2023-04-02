const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

subscriptionSchema.post("save", handleMongooseError);

const Subscription = model("subscription", subscriptionSchema);

const subscriptionValidationSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp, { name: "valid email" }),
});

module.exports = { Subscription, subscriptionValidationSchema };
