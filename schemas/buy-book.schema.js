const Joi = require('joi');

const idCompraLibro = Joi.number();
const issn = Joi.string();
const usuario = Joi.string();
const idCompra= Joi.number();
const cantidad = Joi.number();

const createBuyBookSchema = Joi.object({
  idCompraLibro:idCompraLibro,
  issn:issn.required(),
  usuario:usuario.required(),
  idCompra:idCompra.required(),
  cantidad:cantidad.required()
});

const updateBuyBookSchema = Joi.object({
  idCompraLibro:idCompraLibro,
  issn:issn,
  usuario:usuario,
  idCompra:idCompra,
  cantidad:cantidad
});

const getBuyBookSchema = Joi.object({
  idCompraLibro: idCompraLibro.required()
});

module.exports = { createBuyBookSchema, updateBuyBookSchema, getBuyBookSchema };
