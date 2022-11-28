const Joi = require('joi');

const idEstadoCompra = Joi.number();
const estadoCompra = Joi.string();

const createStateBuySchema = Joi.object({
  idEstadoCompra:idEstadoCompra,
  estadoCompra:estadoCompra.required()
});

const updateStateBuySchema = Joi.object({
  idEstadoCompra:idEstadoCompra,
  estadoCompra:estadoCompra
});

const getStateBuySchema = Joi.object({
  idEstadoCompra: idEstadoCompra.required()
});

module.exports = { createStateBuySchema, updateStateBuySchema, getStateBuySchema };
