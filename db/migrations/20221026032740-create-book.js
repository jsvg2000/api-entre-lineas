'use strict';


const {TypeUserSchema,TYPEUSER_TABLE} = require('./../models/type-user.models');
const {UserSchema, USER_TABLE } = require('./../models/user.model');
const {ConversationSchema,CONVERSATION_TABLE} = require('./../models/conversation.model');
const {MessageSchema,MESSAGE_TABLE} = require('./../models/message.models');
const {ConversationUserSchema,CONVERSATIONUSER_TABLE} = require('./../models/conversation-user.model');

const {NoticesSchema,NOTICES_TABLE} = require('./../models/notices.models');
const {BookSchema, BOOK_TABLE } = require('./../models/book.model');
const {StoreSchema,STORE_TABLE} = require('./../models/store.model');
const {ExemplarSchema,EXEMPLAR_TABLE} = require('./../models/exemplar.model');

const {TypeTargetSchema,TYPETARGET_TABLE} = require('./../models/type-target.models');
const {TargetSchema,TARGET_TABLE} = require('./../models/target.models');
const {HaveTargetSchema,HAVETARGET_TABLE} = require('./../models/have-target.models');

const {StateBuySchema,STATEBUY_TABLE} = require('./../models/state-buy-model');
const {BuySchema,BUY_TABLE} = require('./../models/buy.model');
const {BuyBookSchema,BUYBOOK_TABLE} = require('./../models/buy-book.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TYPEUSER_TABLE,TypeUserSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CONVERSATION_TABLE,ConversationSchema);
    await queryInterface.createTable(MESSAGE_TABLE, MessageSchema);
    await queryInterface.createTable(CONVERSATIONUSER_TABLE,ConversationUserSchema);


    await queryInterface.createTable(NOTICES_TABLE,NoticesSchema);
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
    await queryInterface.createTable(STORE_TABLE,StoreSchema);
    await queryInterface.createTable(EXEMPLAR_TABLE, ExemplarSchema);


    await queryInterface.createTable(TYPETARGET_TABLE, TypeTargetSchema);
    await queryInterface.createTable(TARGET_TABLE,TargetSchema);
    await queryInterface.createTable(HAVETARGET_TABLE, HaveTargetSchema);


    await queryInterface.createTable(STATEBUY_TABLE, StateBuySchema);
    await queryInterface.createTable(BUY_TABLE,BuySchema);
    await queryInterface.createTable(BUYBOOK_TABLE, BuyBookSchema);

  },

  async down (queryInterface) {
    await queryInterface.drop(CONVERSATIONUSER_TABLE);
    await queryInterface.drop(MESSAGE_TABLE);
    await queryInterface.drop(CONVERSATION_TABLE);
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(TYPEUSER_TABLE);

    await queryInterface.drop(EXEMPLAR_TABLE);
    await queryInterface.drop(STORE_TABLE);
    await queryInterface.drop(BOOK_TABLE);
    await queryInterface.drop(NOTICES_TABLE);

    await queryInterface.drop(HAVETARGET_TABLE);
    await queryInterface.drop(TARGET_TABLE);
    await queryInterface.drop(TYPETARGET_TABLE);

    await queryInterface.drop(BUYBOOK_TABLE);
    await queryInterface.drop(BUY_TABLE);
    await queryInterface.drop(STATEBUY_TABLE);
  }
};
