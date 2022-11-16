const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class NoticesService {

  constructor(){
  }

  async create(data) {
    const newNotices = await models.Notices.create(data);
    return newNotices;
  }

  async find() {
    const rta = await models.Notices.findAll({
      include:['books']
    });
    return rta;
  }

  async findOne(idNotices) {
    const notices = await models.Notices.findByPk(idNotices,{
      include:['books']
    });
    if(!notices){
      throw boom.notFound('notices not found');
    }
    return notices;

  }

  async update(idNotices, changes) {
    const notices = await this.findOne(idNotices);
    const rta = await notices.update(changes);
    return rta;

  }

  async delete(idNotices) {
    const notices = await this.findOne(idNotices);
    await notices.destroy();
    return{idNotices}
  }

}

module.exports = NoticesService;
