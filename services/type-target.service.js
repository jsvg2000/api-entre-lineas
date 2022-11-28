const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TypeTargetService {

  constructor(){
  }

  async create(typeTarget) {
    const newTypeTarget = await models.TypeTarget.create(typeTarget);
    return newTypeTarget;
  }

  async find() {
    const typeTarget = await models.TypeTarget.findAll({
      include:['target']
    });
    return typeTarget;
  }

  async findOne(idTypeTarget) {
    const typeTarget = await models.TypeTarget.findByPk(idTypeTarget,{
      include:['target']
    });
    if(!typeTarget){
      throw boom.notFound('TypeTarget not found');
    }
    return typeTarget;

  }

  async update(idTypeTarget, changes) {
    const typeTarget = await this.findOne(idTypeTarget);
    const updateTypeTarget = await typeTarget.update(changes);
    return updateTypeTarget;
  }

  async delete(idTypeTarget) {
    const TypeTarget = await this.findOne(idTypeTarget);
    await TypeTarget.destroy();
    return{idTypeTarget}
  }

}

module.exports = TypeTargetService;
