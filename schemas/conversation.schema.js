const Joi = require('joi');

const idConversacion =Joi.number();
const fecha =Joi.date();
const inhabilitar=Joi.bool();
const limit =Joi.number();
const offset =Joi.number();

const createConversationSchema = Joi.object({
  idConversacion: idConversacion,
  fecha: fecha,
  inhabilitar: inhabilitar

});

const updateConversationSchema = Joi.object({
  idConversacion: idConversacion,
  fecha: fecha,
  inhabilitar: inhabilitar
});

const getConversationSchema = Joi.object({
  idConversacion: idConversacion.required()
});

const queryConversationSchema = Joi.object({
  limit,
  offset
});

module.exports = { createConversationSchema, updateConversationSchema, getConversationSchema,queryConversationSchema }
