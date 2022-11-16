'use strict';


const {TypeUserSchema,TYPEUSER_TABLE} = require('./../models/type-user.models');
const {UserSchema, USER_TABLE } = require('./../models/user.model');
const {ConversationSchema,CONVERSATION_TABLE} = require('./../models/conversation.model');
const {MessageSchema,MESSAGE_TABLE} = require('./../models/message.models');
const {ConversationUserSchema,CONVERSATIONUSER_TABLE} = require('./../models/conversation-user.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TYPEUSER_TABLE,TypeUserSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CONVERSATION_TABLE,ConversationSchema);
    await queryInterface.createTable(MESSAGE_TABLE, MessageSchema);
    await queryInterface.createTable(CONVERSATIONUSER_TABLE,ConversationUserSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(CONVERSATIONUSER_TABLE);
    await queryInterface.drop(MESSAGE_TABLE);
    await queryInterface.drop(CONVERSATION_TABLE);
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(TYPEUSER_TABLE);
  }
};
