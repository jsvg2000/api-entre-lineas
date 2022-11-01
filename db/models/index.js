const {BookSchema,Book} = require('./book.model');
const {UserSchema,User} = require('./user.model');

function setupModels(sequelize){
  Book.init(BookSchema, Book.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
