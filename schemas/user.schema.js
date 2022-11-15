const Joi = require('joi');

const dni = Joi.number().integer().min(0);
const nombre = Joi.string().max(50);
const apellidos = Joi.string().max(50);
const fechaNacimiento = Joi.date();
const tipoDocumento = Joi.string().max(50);
const direccion = Joi.string().max(50);
const pais = Joi.string().max(50);
const departamento = Joi.string().max(50);
const ciudad = Joi.string().max(50);
const genero = Joi.string();
const correo = Joi.string().email();
const usuario = Joi.string();
const contrasena = Joi.string();
const temasPreferencia = Joi.string();
const idTipoUsuario = Joi.number().integer();
const suscripcionNoticias = Joi.boolean();
const inhabilitar = Joi.boolean();

//const user_type = Joi.number().integer();

const createUserSchema = Joi.object({
  dni: dni,
  nombre: nombre,
  apellidos: apellidos,
  fechaNacimiento: fechaNacimiento,
  tipoDocumento:tipoDocumento,
  direccion: direccion,
  pais: pais,
  departamento: departamento,
  ciudad: ciudad,
  genero: genero,
  correo: correo,
  usuario: usuario.required(),
  contrasena: contrasena.required(),
  temasPreferencia:temasPreferencia,
  idTipoUsuario: idTipoUsuario.required(),
  suscripcionNoticias: suscripcionNoticias.required(),
  inhabilitar: inhabilitar.required()
});

const updateUserSchema = Joi.object({
  dni: dni,
  nombre: nombre,
  apellidos: apellidos,
  fechaNacimiento: fechaNacimiento,
  tipoDocumento:tipoDocumento,
  direccion: direccion,
  pais: pais,
  departamento: departamento,
  ciudad: ciudad,
  genero: genero,
  correo: correo,
  usuario: usuario,
  contrasena: contrasena,
  temasPreferencia:temasPreferencia,
  idTipoUsuario: idTipoUsuario,
  suscripcionNoticias: suscripcionNoticias,
  inhabilitar: inhabilitar
});

const getUserSchema = Joi.object({
  usuario: usuario
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
