const Joi = require('joi');

const idTipoUsuario =Joi.number().min(0).max(9999);
const tipoUsuario =Joi.string().min(0).max(50);

const createStoreSchema = Joi.object({
  idTipoUsuario: idTipoUsuario.required(),
  tipoUsuario: tipoUsuario.required()
});

const updateStoreSchema = Joi.object({
  idTipoUsuario: idTipoUsuario,
  tipoUsuario: tipoUsuario
});

const getStoreSchema = Joi.object({
  idTipoUsuario: idTipoUsuario.required(),
});

module.exports = { createStoreSchema, updateStoreSchema, getStoreSchema }
