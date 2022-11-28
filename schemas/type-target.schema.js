 const Joi = require('joi');

const idTipoTarjeta = Joi.number().min(0).max(4);
const tipoTarjeta = Joi.string().min(2).max(20);

const createTypeTargetSchema = Joi.object({
  idTipoTarjeta: idTipoTarjeta.required(),
  tipoTarjeta: tipoTarjeta.required()
});

const updateTypeTargetSchema = Joi.object({
  idTipoTarjeta: idTipoTarjeta,
  tipoTarjeta: tipoTarjeta
});

const getTypeTargetSchema = Joi.object({
  idTipoTarjeta: idTipoTarjeta.required(),
});

module.exports = { createTypeTargetSchema, updateTypeTargetSchema, getTypeTargetSchema }
