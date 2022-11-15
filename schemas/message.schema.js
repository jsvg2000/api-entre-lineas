const Joi = require('joi');

const idMensaje = Joi.number();
const mensaje = Joi.string();
const fecha =Joi.date();
const inhabilitar=Joi.bool();

const createMessageSchema = Joi.object({
  idMensaje: idMensaje,
  mensaje: mensaje.required(),
  fecha: fecha,
  inhabilitar: inhabilitar

});

const updateMessageSchema = Joi.object({
  idMensaje: idMensaje,
  mensaje: mensaje,
  fecha: fecha,
  inhabilitar: inhabilitar
});

const getMessageSchema = Joi.object({
  idMensaje: idMensaje.required()
});

module.exports = { createMessageSchema, updateMessageSchema, getMessageSchema }
