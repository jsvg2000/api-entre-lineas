const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class TargetService {

  constructor(){
  }

  async create(data) {
    const newTarget = await models.Target.create(data);
    return newTarget;
  }

  async find() {
    const rta = await models.Target.findAll();
    return rta;
  }

  async findOne(numeroTarjeta) {
    const target = await models.Target.findByPk(numeroTarjeta,{
      include:['TypeTarget']
    });
    if(!target){
      throw boom.notFound('target not found');
    }
    return target;
  }

  async update(numeroTarjeta, changes) {
    const target = await this.findOne(numeroTarjeta);
    const rta = await target.update(changes);
    return rta;

  }

  async delete(numeroTarjeta) {
    const target = await this.findOne(numeroTarjeta);
    await target.destroy();
    return{numeroTarjeta}
  }

}

module.exports = TargetService;
