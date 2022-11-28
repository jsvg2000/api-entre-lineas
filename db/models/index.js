const {BookSchema,Book} = require('./book.model');
const {UserSchema,User} = require('./user.model');
const {StoreSchema,Store} = require('./store.model');
const {TypeUserSchema,TypeUser} = require('./type-user.models');
const {ConversationSchema,Conversation} = require('./conversation.model');
const {MessageSchema,Message} = require('./message.models');
const {ConversationUserSchema,ConversationUser} = require('./conversation-user.model');
const {ExemplarSchema,Exemplar} = require('./exemplar.model');
const {NoticesSchema,Notices} = require('./notices.models');

const {TypeTargetSchema,TypeTarget} = require('./type-target.models');
const {TargetSchema,Target} = require('./target.models');
const {HaveTargetSchema,HaveTarget} = require('./have-target.models');


const {StateBuySchema,StateBuy} = require('./state-buy-model');
const {BuySchema,Buy} = require('./buy.model');
const {BuyBookSchema,BuyBook} = require('./buy-book.model');


function setupModels(sequelize){
  //Tables with active relationship

  TypeUser.init(TypeUserSchema,TypeUser.config(sequelize));
  Conversation.init(ConversationSchema,Conversation.config(sequelize));
  Message.init(MessageSchema,Message.config(sequelize));
  Store.init(StoreSchema, Store.config(sequelize));
  Book.init(BookSchema, Book.config(sequelize));
  TypeTarget.init(TypeTargetSchema, TypeTarget.config(sequelize));
  StateBuy.init(StateBuySchema, StateBuy.config(sequelize));

  //Tables with pasive relationship
  User.init(UserSchema, User.config(sequelize));
  ConversationUser.init(ConversationUserSchema, ConversationUser.config(sequelize));
  Notices.init(NoticesSchema, Notices.config(sequelize));
  Exemplar.init(ExemplarSchema, Exemplar.config(sequelize));
  Target.init(TargetSchema, Target.config(sequelize));
  HaveTarget.init(HaveTargetSchema, HaveTarget.config(sequelize));
  Buy.init(BuySchema, Buy.config(sequelize));
  BuyBook.init(BuyBookSchema, BuyBook.config(sequelize));

  //Associate with active relationship
  TypeUser.associate(sequelize.models);
  Conversation.associate(sequelize.models);
  Message.associate(sequelize.models);
  Store.associate(sequelize.models);
  Book.associate(sequelize.models);
  TypeTarget.associate(sequelize.models);
  StateBuy.associate(sequelize.models);

  //Associate with pasive relationship
  User.associate(sequelize.models);
  Notices.associate(sequelize.models);
  Target.associate(sequelize.models);
  Buy.associate(sequelize.models);

}

module.exports = setupModels;
