const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { config } = require('./../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {

  async getUser(usuario, password) {
    const user = await service.findOne(usuario);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.contrasena);
    if (!isMatch) {
      throw boom.unauthorized();;
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.usuario,
      role: user.idTipoUsuario
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async sendRecovery(correo){
    const user = await service.findByEmail(correo);
    if (!user) {
      throw boom.unauthorized();
    }

    const payload = {
      sub: user.usuario
    }

    const token = jwt.sign(payload, config.jwtSecret,{expiresIn:'15min'});
    const link = `http://myfrontend.com/recovery?toke=${token}` ;


    const mail = {
      from: config.smtpEmail, // sender address
      to: user.correo, // list of receivers
      subject: "Email Para Recuperar Contraseña", // Subject line
      //text: `Hola  ${user.usuario}`, // plain text body
      html: `Hola user <b>${user.usuario}</b> ingresa al siguiente link para recuperar la contraseña => <b>${link}</b> `, // html body
    }

    const rta= await this.sendMail(mail);
    return rta;

  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    });
    await transporter.sendMail(infoMail);
    return { message: 'mail sent' };
  }
}

module.exports = AuthService;
