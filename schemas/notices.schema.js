const Joi = require('joi');

const idNoticia = Joi.number();
const issn = Joi.string();
const inhabilitado=Joi.bool();

const createNoticesSchema = Joi.object({
  idNoticia : idNoticia,
  issn : issn.required(),
  inhabilitado:inhabilitado
});

const updateNoticesSchema = Joi.object({
  idNoticia : idNoticia,
  issn : issn,
  inhabilitado:inhabilitado
});

const getNoticesSchema = Joi.object({
  idNoticia: idNoticia.required()
});

module.exports = { createNoticesSchema, updateNoticesSchema, getNoticesSchema }
