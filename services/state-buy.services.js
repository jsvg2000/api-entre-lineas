const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class StateBuyService {

  constructor(){
  }

  async create(stateBuy) {
    const newStateBuy = await models.StateBuy.create(stateBuy);
    return newStateBuy;
  }

  async find() {
    const stateBuy = await models.StateBuy.findAll({
      include:['Buy']
    });
    return stateBuy;
  }

  async findOne(idEstadoCompra) {
    const stateBuy = await models.StateBuy.findByPk(idEstadoCompra,{
      include:['Buy']
    });
    if(!stateBuy){
      throw boom.notFound('stateBuy not found');
    }
    return stateBuy;

  }

  async update(idEstadoCompra, changes) {
    const stateBuy = await this.findOne(idEstadoCompra);
    const updatestateBuy = await stateBuy.update(changes);
    return updatestateBuy;
  }

  async delete(idEstadoCompra) {
    const stateBuy = await this.findOne(idEstadoCompra);
    await stateBuy.destroy();
    return{idEstadoCompra}
  }

}

module.exports = StateBuyService;
