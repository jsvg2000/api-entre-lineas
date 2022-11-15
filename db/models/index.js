const {BookSchema,Book} = require('./book.model');
const {UserSchema,User} = require('./user.model');
const {StoreSchema,Store} = require('./store.model');
const {TypeUserSchema,TypeUser} = require('./type-user.models');
const {ConversationSchema,Conversation} = require('./conversation.model');
const {MessageSchema,Message} = require('./message.models');
const {ConversationUserSchema,ConversationUser} = require('./conversation-user.model');

function setupModels(sequelize){
  //Tables with active relationship

  TypeUser.init(TypeUserSchema,TypeUser.config(sequelize));
  Conversation.init(ConversationSchema,Conversation.config(sequelize));
  Message.init(MessageSchema,Message.config(sequelize));
  Store.init(StoreSchema, Store.config(sequelize));

  //Tables with pasive relationship
  User.init(UserSchema, User.config(sequelize));
  ConversationUser.init(ConversationUserSchema, ConversationUser.config(sequelize));
  Book.init(BookSchema, Book.config(sequelize));

  //Associate with active relationship
  TypeUser.associate(sequelize.models);
  Conversation.associate(sequelize.models);
  Message.associate(sequelize.models);
  Store.associate(sequelize.models);

  //Associate with pasive relationship
  User.associate(sequelize.models);
  ConversationUser.associate(sequelize.models);
  Book.associate(sequelize.models);

}

module.exports = setupModels;
