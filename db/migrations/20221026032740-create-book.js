'use strict';

const { BookSchema, BOOK_TABLE } = require('./../models/book.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(BOOK_TABLE);
  }
};
