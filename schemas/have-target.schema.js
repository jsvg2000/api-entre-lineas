const Joi = require('joi');

const idTieneTarjeta = Joi.number();
const numeroTarjeta = Joi.number();
const usuario = Joi.string();

const createHaveTargetSchema = Joi.object({
  idTieneTarjeta,
  numeroTarjeta,
  usuario
});

const updateHaveTargetSchema = Joi.object({
  idTieneTarjeta,
  numeroTarjeta,
  usuario
});

const getHaveTargetSchema = Joi.object({
  idTieneTarjeta: idTieneTarjeta.required()
});

module.exports = { createHaveTargetSchema, updateHaveTargetSchema, getHaveTargetSchema };
