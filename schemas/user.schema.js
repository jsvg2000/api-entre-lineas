const Joi = require('joi');

const dni = Joi.number().integer().max();
const tipoUsuario = Joi.number().integer();
const nombre = Joi.string();
const apellidos = Joi.string();
const genero = Joi.string();
const fechaNacimiento = Joi.date();
const pais = Joi.string();
const departamento = Joi.string();
const ciudad = Joi.string();
const direccion = Joi.string();
const generoFavorito = Joi.string();
const correo = Joi.string().email();
const usuario = Joi.string();
const contrasena = Joi.string().min(5);
const suscripcionNoticias = Joi.boolean();
const inhabilitar = Joi.boolean();

//const user_type = Joi.number().integer();

const createUserSchema = Joi.object({
  dni: dni,
  tipoUsuario: tipoUsuario.required(),
  nombre: nombre,
  apellidos: apellidos,
  genero: genero,
  fechaNacimiento: fechaNacimiento,
  pais: pais,
  departamento: departamento,
  ciudad: ciudad,
  direccion: direccion,
  generoFavorito: generoFavorito,
  correo: correo,
  usuario: usuario.required(),
  contrasena: contrasena.required(),
  suscripcionNoticias: suscripcionNoticias.required(),
  inhabilitar: inhabilitar.required()
  //user_type: user_type.required()
});

const updateUserSchema = Joi.object({
  dni: dni,
  tipoUsuario: tipoUsuario,
  nombre: nombre,
  apellidos: apellidos,
  genero: genero,
  fechaNacimiento: fechaNacimiento,
  pais: pais,
  departamento: departamento,
  ciudad: ciudad,
  direccion: direccion,
  generoFavorito: generoFavorito,
  correo: correo,
  contrasena: contrasena,
  suscripcionNoticias: suscripcionNoticias,
  inhabilitar: inhabilitar
  //user_type: user_type,
});

const getUserSchema = Joi.object({
  dni: dni,
  tipoUsuario: tipoUsuario,
  nombre: nombre,
  apellidos: apellidos,
  genero: genero,
  fechaNacimiento: fechaNacimiento,
  pais: pais,
  departamento: departamento,
  ciudad: ciudad,
  direccion: direccion,
  generoFavorito: generoFavorito,
  correo: correo,
  usuario: usuario,
  contrasena: contrasena,
  suscripcionNoticias: suscripcionNoticias,
  inhabilitar: inhabilitar
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
