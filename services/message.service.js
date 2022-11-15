const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class MessageService {

  constructor(){
  }

  async create(data) {
    const newMessage = await models.Message.create(data);
    return newMessage;
  }

  async find() {
    const rta = await models.Message.findAll();
    return rta;
  }

  async findOne(idMensaje) {
    const message = await models.Message.findByPk(idMensaje,{
      //include:['books']
    });
    if(!message){
      throw boom.notFound('Message not found');
    }
    return message;

  }

  async update(idMensaje, changes) {
    const message = await this.findOne(idMensaje);
    const rta = await message.update(changes);
    return rta;

  }

  async delete(idMensaje) {
    const message = await this.findOne(idMensaje);
    await message.destroy();
    return{idMensaje}
  }

}

module.exports = MessageService;
