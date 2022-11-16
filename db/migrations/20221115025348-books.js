'use strict';

const {NoticesSchema,NOTICES_TABLE} = require('./../models/notices.models');
const {BookSchema, BOOK_TABLE } = require('./../models/book.model');
const {StoreSchema,STORE_TABLE} = require('./../models/store.model');
const {ExemplarSchema,EXEMPLAR_TABLE} = require('./../models/exemplar.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(NOTICES_TABLE,NoticesSchema);
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
    await queryInterface.createTable(STORE_TABLE,StoreSchema);
    await queryInterface.createTable(EXEMPLAR_TABLE, ExemplarSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(EXEMPLAR_TABLE);
    await queryInterface.drop(STORE_TABLE);
    await queryInterface.drop(BOOK_TABLE);
    await queryInterface.drop(NOTICES_TABLE);
  }
};
