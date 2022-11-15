const Joi = require('joi');

const idConversacionUsario = Joi.number();
const idConversacion = Joi.number();
const usuario = Joi.string();
const idMensaje = Joi.number();
const inhabilitar=Joi.bool();

const createConversationUserSchema = Joi.object({
  idConversacionUsario:idConversacionUsario,
  idConversacion:idConversacion.required(),
  usuario:usuario.required(),
  idMensaje: idMensaje.required(),
  inhabilitar: inhabilitar
});

const updateConversationUserSchema = Joi.object({
  idConversacionUsario:idConversacionUsario,
  idConversacion:idConversacion,
  usuario:usuario,
  idMensaje: idMensaje,
  inhabilitar: inhabilitar
});

const getConversationUserSchema = Joi.object({
  idConversacionUsario: idConversacionUsario.required()
});

module.exports = { createConversationUserSchema, updateConversationUserSchema, getConversationUserSchema }
