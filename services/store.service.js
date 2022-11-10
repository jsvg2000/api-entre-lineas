const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class StoreService {

  constructor(){
  }

  async create(data) {
    const newStore = await models.Store.create(data);
    return newStore;
  }

  async find() {
    const rta = await models.Store.findAll();
    return rta;
  }

  async findOne(idTienda) {
    const store = await models.Store.findByPk(idTienda,{
      include:['books']
    });
    if(!store){
      throw boom.notFound('store not found');
    }
    return store;

  }

  async update(idTienda, changes) {
    const store = await this.findOne(idTienda);
    const rta = await store.update(changes);
    return rta;

  }

  async delete(idTienda) {
    const store = await this.findOne(idTienda);
    await store.destroy();
    return{idTienda}
  }

}

module.exports = StoreService;
