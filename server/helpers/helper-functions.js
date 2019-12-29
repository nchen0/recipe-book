const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
require("dotenv").config();
const secret = process.env.SECRET;

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

function validateRecipe(req) {
  const newRecipe = req.body;
  const schema = Joi.object({
    title: Joi.string()
      .min(3)
      .required(),
    ingredients: Joi.string()
      .min(5)
      .required(),
    directions: Joi.string()
      .min(5)
      .required()
  });
  return schema.validate(newRecipe);
}

module.exports = {
  generateToken,
  validateUser,
  validateRecipe
};
