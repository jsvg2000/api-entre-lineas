const {BookSchema,Book} = require('./book.model');
const {UserSchema,User} = require('./user.model');
const {StoreSchema,Store} = require('./store.model');
const {TypeUserSchema,TypeUser} = require('./type-user.models');

function setupModels(sequelize){
  Store.init(StoreSchema, Store.config(sequelize));
  TypeUser.init(TypeUserSchema,TypeUser.config(sequelize));

  Book.init(BookSchema, Book.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  TypeUser.associate(sequelize.models);

  Store.associate(sequelize.models);
  Book.associate(sequelize.models);
}

module.exports = setupModels;
