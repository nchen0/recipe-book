const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
require("dotenv").config();
const secret = process.env.SECRET;

console.log("secret: ", secret);

function generateToken(user) {
  const payload = {
    username: user.username,
    password: user.password
  };
  const options = {
    expiresIn: "2h"
  };
  return jwt.sign(payload, secret, options);
}

function validateUser(req) {
  const newUser = req.body;
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(newUser);
}

module.exports = {
  generateToken,
  validateUser
};
