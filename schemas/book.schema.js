const Joi = require('joi');

const issn = Joi.string().min(0).max(50);
const titulo = Joi.string().min(0).max(50);
const autor = Joi.string().min(0).max(50);
const fechaPublicacion = Joi.allow();
const anyoPublicacion = Joi.number();
const genero = Joi.string().min(0).max(50);
const numeroPaginas = Joi.number().min(0);
const editorial = Joi.string().min(0).max(50);
const idioma = Joi.string().min(0).max(50);
const estado = Joi.allow()
const precio = Joi.number().min(0);
const urlImage = Joi.string().min(0);

const createBookSchema = Joi.object({
  issn: issn.required(),
  titulo: titulo.required(),
  autor: autor.required(),
  fechaPublicacion: fechaPublicacion.required(),
  anyoPublicacion: anyoPublicacion.required(),
  genero: genero.required(),
  numeroPaginas: numeroPaginas.required(),
  editorial: editorial.required(),
  idioma: idioma.required(),
  estado: estado.required(),
  precio: precio.required(),
  urlImage: urlImage.required(),
});

const updateBookSchema = Joi.object({
  issn: issn,
  titulo: titulo,
  autor: autor,
  fechaPublicacion: fechaPublicacion,
  anyoPublicacion: anyoPublicacion,
  genero: genero,
  numeroPaginas: numeroPaginas,
  editorial: editorial,
  idioma: idioma,
  estado: estado,
  precio: precio,
  urlImage: urlImage,
});

const getBookSchema = Joi.object({
  issn: issn.required(),
});

module.exports = { createBookSchema, updateBookSchema, getBookSchema }
