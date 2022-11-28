const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class HaveTargetService {

  constructor(){
  }

  async create(data) {
    const newHaveTarget = await models.HaveTarget.create(data);
    return newHaveTarget;
  }

  async find() {
    const rta = await models.HaveTarget.findAll();
    return rta;
  }

  async findOne(idTieneTarjeta) {
    const tieneTarjeta = await models.HaveTarget.findByPk(idTieneTarjeta);
    if(!tieneTarjeta){
      throw boom.notFound('TieneTarjeta not found');
    }
    return tieneTarjeta;

  }

  async update(idTieneTarjeta, changes) {
    const tieneTarjeta = await this.findOne(idTieneTarjeta);
    const rta = await tieneTarjeta.update(changes);
    return rta;

  }

  async delete(idTieneTarjeta) {
    const tieneTarjeta = await this.findOne(idTieneTarjeta);
    await tieneTarjeta.destroy();
    return{idTieneTarjeta}
  }

}

module.exports = HaveTargetService;
