const Joi = require('joi');

const idTienda =Joi.number();
const nombreTienda =Joi.string().min(0).max(50);
const telefono=Joi.number();
const horarios= Joi.string();
const direccion=Joi.string();
const pais=Joi.string();
const departamento=Joi.string();
const cuidad=Joi.string();


const createStoreSchema = Joi.object({
  idTienda: idTienda.required(),
  nombreTienda: nombreTienda.required(),
  telefono: telefono.required(),
  horarios: horarios.required(),
  direccion: direccion.required(),
  pais: pais.required(),
  departamento: departamento.required(),
  cuidad: cuidad.required()
});

const updateStoreSchema = Joi.object({
  idTienda: idTienda,
  nombreTienda: nombreTienda,
  telefono: telefono,
  horarios: horarios,
  direccion: direccion,
  pais: pais,
  departamento: departamento,
  cuidad: cuidad
});

const getStoreSchema = Joi.object({
  idTienda: idTienda.required(),
});

module.exports = { createStoreSchema, updateStoreSchema, getStoreSchema }
