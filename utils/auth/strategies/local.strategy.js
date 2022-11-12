const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'usuario',
    passwordField: 'contrasena'
  }
  ,async (username,password, done)=>{
    try{
      const user = await service.findOne(username);
      if(!user){
        done(boom.unauthorized(),false);
      }
      const isMatch = await bcrypt.compare(password,user.contrasena);
      if(!isMatch){
        done(boom.unauthorized(),false);
      }
      delete user.getDataValue.contrasena;
      done(null,user);
    }catch(error){
      done(error,false)
    }
  }
);

module.exports = LocalStrategy;
