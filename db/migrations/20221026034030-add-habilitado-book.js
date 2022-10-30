'use strict';

const { BookSchema, BOOK_TABLE } = require('./../models/book.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(BOOK_TABLE, 'habilitado', BookSchema.habilitado);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(BOOK_TABLE, 'habilitado');
  }
};
