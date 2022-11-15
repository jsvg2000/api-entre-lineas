const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TypeUserService {

  constructor(){
  }

  async create(typeUser) {
    const newTypeUser = await models.TypeUser.create(typeUser);
    return newTypeUser;
  }

  async find() {
    const typeUser = await models.TypeUser.findAll({
      include:['users']
    });
    return typeUser;
  }

  async findOne(idTypeUser) {
    const typeUser = await models.TypeUser.findByPk(idTypeUser,{
      include:['users']
    });
    if(!typeUser){
      throw boom.notFound('TypeUser not found');
    }
    return typeUser;

  }

  async update(idTypeUser, changes) {
    const typeUser = await this.findOne(idTypeUser);
    const updateTypeUser = await typeUser.update(changes);
    return updateTypeUser;
  }

  async delete(idTypeUser) {
    const TypeUser = await this.findOne(idTypeUser);
    await TypeUser.destroy();
    return{idTypeUser}
  }

}

module.exports = TypeUserService;
