const Joi = require('joi');

const idTipoUsuario =Joi.number().min(0).max(4);
const tipoUsuario =Joi.string().min(2).max(20);

const createTypeUserSchema = Joi.object({
  idTipoUsuario: idTipoUsuario.required(),
  tipoUsuario: tipoUsuario.required()
});

const updateTypeUserSchema = Joi.object({
  idTipoUsuario: idTipoUsuario,
  tipoUsuario: tipoUsuario
});

const getTypeUserSchema = Joi.object({
  idTipoUsuario: idTipoUsuario.required(),
});

module.exports = { createTypeUserSchema, updateTypeUserSchema, getTypeUserSchema }
