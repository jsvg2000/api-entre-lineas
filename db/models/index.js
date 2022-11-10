const {BookSchema,Book} = require('./book.model');
const {UserSchema,User} = require('./user.model');
const {StoreSchema,Store} = require('./store.model');

function setupModels(sequelize){
  Store.init(StoreSchema, Store.config(sequelize));
  Book.init(BookSchema, Book.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  Store.associate(sequelize.models);
  Book.associate(sequelize.models);
}

module.exports = setupModels;
