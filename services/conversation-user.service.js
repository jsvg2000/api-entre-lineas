const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ConversationUserService {

  constructor(){
  }

  async create(data) {
    const newConversationUser = await models.ConversationUser.create(data);
    return newConversationUser;
  }

  async find() {
    const rta = await models.ConversationUser.findAll();
    return rta;
  }

  async findOne(idConversacionUser) {
    const conversationUser = await models.ConversationUser.findByPk(idConversacionUser,{
      //include:['conversationUser']
    });
    if(!conversationUser){
      throw boom.notFound('Conversation not found');
    }
    return conversationUser;

  }

  async update(idConversacionUser, changes) {
    const conversationUser = await this.findOne(idConversacionUser);
    const rta = await conversationUser.update(changes);
    return rta;

  }

  async delete(idConversacionUser) {
    const conversationUser = await this.findOne(idConversacionUser);
    await conversationUser.destroy();
    return{idConversacionUser}
  }

}

module.exports = ConversationUserService;
