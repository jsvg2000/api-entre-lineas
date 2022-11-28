const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class BuyService {

  constructor(){
  }

  async create(data) {
    const newBuy = await models.Buy.create(data);
    return newBuy;
  }

  async find() {
    const rta = await models.Buy.findAll();
    return rta;
  }

  async findOne(idCompra) {
    const compra = await models.Buy.findByPk(idCompra);
    if(!compra){
      throw boom.notFound('compra not found');
    }
    return compra;
  }

  async findBook(idCompra) {
    const compra = await models.Buy.findByPk(idCompra,{
      include:['Book']
    });
    if(!compra){
      throw boom.notFound('compra not found');
    }
    return compra;
  }

  async update(idCompra, changes) {
    const compra = await this.findOne(idCompra);
    const rta = await compra.update(changes);
    return rta;

  }

  async delete(idCompra) {
    const compra = await this.findOne(idCompra);
    await compra.destroy();
    return{idCompra}
  }

}

module.exports = BuyService;
