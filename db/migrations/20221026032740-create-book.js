'use strict';

const { BookSchema, BOOK_TABLE } = require('./../models/book.model');
const {StoreSchema,STORE_TABLE} = require('./../models/store.model');
const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(STORE_TABLE, StoreSchema);
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(BOOK_TABLE);
    await queryInterface.drop(STORE_TABLE);
    await queryInterface.drop(USER_TABLE);
  }
};
