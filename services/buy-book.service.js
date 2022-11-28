const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class BuyBookService {

  constructor(){
  }

  async create(data) {
    const newBuyBook = await models.BuyBook.create(data);
    return newBuyBook;
  }

  async find() {
    const rta = await models.BuyBook.findAll();
    return rta;
  }

  async findOne(idCompraLibro) {
    const compraLibro = await models.BuyBook.findByPk(idCompraLibro);
    if(!compraLibro){
      throw boom.notFound('compraLibro not found');
    }
    return compraLibro;

  }

  async update(idCompraLibro, changes) {
    const compraLibro = await this.findOne(idCompraLibro);
    const rta = await compraLibro.update(changes);
    return rta;

  }

  async delete(idCompraLibro) {
    const compraLibro = await this.findOne(idCompraLibro);
    await compraLibro.destroy();
    return{idCompraLibro}
  }

}

module.exports = BuyBookService;
