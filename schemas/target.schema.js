const Joi = require('joi');

const numeroTarjeta = Joi.number();
const idTipoTarjeta = Joi.number().min(0).max(4);
const saldo = Joi.number();
const cupo = Joi.number();
const fechaVencimiento = Joi.date();
const nombreTitular = Joi.string();
const cvv = Joi.number().min(0).max(9999);
const inhabilitar = Joi.boolean();


const createTargetSchema = Joi.object({
  numeroTarjeta : numeroTarjeta.required(),
  idTipoTarjeta : idTipoTarjeta.required(),
  saldo : saldo,
  cupo : cupo,
  fechaVencimiento : fechaVencimiento.required(),
  nombreTitular : nombreTitular.required(),
  cvv : cvv.required(),
  inhabilitar : inhabilitar.required()
});

const updateTargetSchema = Joi.object({
  numeroTarjeta : numeroTarjeta,
  idTipoTarjeta : idTipoTarjeta,
  saldo : saldo,
  cupo : cupo,
  fechaVencimiento : fechaVencimiento,
  nombreTitular : nombreTitular,
  cvv : cvv,
  inhabilitar : inhabilitar
});

const getTargetSchema = Joi.object({
  numeroTarjeta : numeroTarjeta.required(),
});

module.exports = { createTargetSchema, updateTargetSchema, getTargetSchema };
