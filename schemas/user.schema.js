const Joi = require('joi');

const dni = Joi.number().integer();
const mail = Joi.string().email();
const password = Joi.string();
const user_type = Joi.number().integer();Joi.string().min(5)

const createUserSchema = Joi.object({
  mail: mail.required(),
  password: password.required(),
  user_type: user_type.required()
});

const updateUserSchema = Joi.object({
  mail: mail,
  user_type: user_type,
});

const getUserSchema = Joi.object({
  dni: dni.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
