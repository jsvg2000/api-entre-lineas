const Joi = require('joi');

const usuario = Joi.string();
const correo = Joi.string().email();
const contrasena = Joi.string().min(5);
//const user_type = Joi.number().integer();

const createUserSchema = Joi.object({
  usuario: usuario.required(),
  contrasena: contrasena.required(),
  //user_type: user_type.required()
});

const updateUserSchema = Joi.object({
  correo: correo,
  //user_type: user_type,
});

const getUserSchema = Joi.object({
  usuario: usuario.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
