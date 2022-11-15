const boom = require('@hapi/boom');
const { options } = require('joi');
const { models } = require('./../libs/sequelize');

class ConversationService {

  constructor(){
  }

  async create(data) {
    const newConversation = await models.Conversation.create(data);
    return newConversation;
  }

  async find() {
    const rta = await models.Conversation.findAll();
    return rta;
  }

  async findOne(idConversacion){
    const Conversation = await models.Conversation.findByPk(idConversacion);
    if(!Conversation){
      throw boom.notFound('Conversation not found');
    }
    return Conversation;
  }

  async findMessage(idConversacion,query) {
    const option = {
      include:['Message']
    }
    const {limit, offset} = query;

    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    const Message = await models.Conversation.findByPk(idConversacion,option);
    if(!Message){
      throw boom.notFound('Messages not found');
    }
    return Message;

  }

  async update(idConversacion, changes) {
    const Conversation = await this.findOne(idConversacion);
    const rta = await Conversation.update(changes);
    return rta;

  }

  async delete(idConversacion) {
    const Conversation = await this.findOne(idConversacion);
    await Conversation.destroy();
    return{idConversacion}
  }

}

module.exports = ConversationService;
