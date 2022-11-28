const Joi = require('joi');

const idCompra =Joi.number();
const idEstadoCompra=Joi.number();
const fecha= Joi.date();


const createBuySchema = Joi.object({
  idCompra: idCompra.required(),
  idEstadoCompra: idEstadoCompra.required(),
  fecha: fecha
});

const updateBuySchema = Joi.object({
  idCompra: idCompra,
  idEstadoCompra: idEstadoCompra,
  fecha: fecha
});

const getBuySchema = Joi.object({
  idCompra: idCompra.required(),
});

module.exports = { createBuySchema, updateBuySchema, getBuySchema }
