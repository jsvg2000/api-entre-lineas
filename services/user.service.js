const faker = require('faker');
const boom = require('@hapi/boom');

const db = require('../database/database');
const dbData = db.getConnection();

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    var users = [];
    dbData.query('SELECT * FROM usuarios', function(error,resultados){
      if(error)
      throw error;
      resultados.forEach(resultado => {
        users.push({
          dni: resultado.dni,
          name: resultado.nombre,
          user_type: resultado.tipo_usuario,
          mail: resultado.console,
          password: resultado.contrasea,
          disable: resultado.inhabilitar,
        });
      });
    })
    this.users = users
  }

  async create(data) {
    const newUser = {
      dni: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(dni) {
    const user = this.users.find(item => item.dni === dni);
    if (!user) {
      throw boom.notFound('user not found');
    }
    if (user.disable) {
      throw boom.conflict('user is disable');
    }
    return user;
  }

  async update(dni, changes) {
    const index = this.users.findIndex(item => item.dni === dni);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(dni) {
    const index = this.users.findIndex(item => item.dni === dni);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { dni };
  }

}

module.exports = UsersService;
