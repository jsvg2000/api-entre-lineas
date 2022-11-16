const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ExemplarService {

  constructor(){
  }

  async create(data) {
    const newExemplar = await models.Exemplar.create(data);
    return newExemplar;
  }

  async find() {
    const rta = await models.Exemplar.findAll();
    return rta;
  }

  async findOne(idEjemplar) {
    const exemplar = await models.Exemplar.findByPk(idEjemplar);
    if(!exemplar){
      throw boom.notFound('Exemplar not found');
    }
    return exemplar;

  }

  async update(idEjemplar, changes) {
    const exemplar = await this.findOne(idEjemplar);
    const rta = await exemplar.update(changes);
    return rta;

  }

  async delete(idEjemplar) {
    const exemplar = await this.findOne(idEjemplar);
    await exemplar.destroy();
    return{idEjemplar}
  }

}

module.exports = ExemplarService;
