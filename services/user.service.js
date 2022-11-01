const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class UsersService {

  constructor(){
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(usuario) {
    const user =  await models.User.findByPk(usuario);
    if (!user) {
      throw boom.notFound('user not found');
    }
    if (user.disable) {
      throw boom.conflict('user is disable');
    }
    return user;
  }

  async update(usuario, changes) {
    const user = await models.User.findByPk(usuario);
    const rta = await user.update(changes);
    return rta;
    /*if (user === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];*/
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
