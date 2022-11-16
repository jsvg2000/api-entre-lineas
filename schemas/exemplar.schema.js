const Joi = require('joi');

const codigo = Joi.number();
const issn = Joi.string();
const idTienda = Joi.number();

const createExemplarSchema = Joi.object({
  codigo:codigo,
  issn:issn,
  idTienda:idTienda
});

const updateExemplarSchema = Joi.object({
  codigo:codigo,
  issn:issn,
  idTienda:idTienda
});

const getExemplarSchema = Joi.object({
  codigo: codigo.required()
});

module.exports = { createExemplarSchema, updateExemplarSchema, getExemplarSchema }
