const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class BookService {

  constructor(){
  }

  async create(data) {
    const newBook = await models.Book.create(data);
    return newBook;
  }

  async find() {
    const rta = await models.Book.findAll();
    return rta;
  }

  async findOne(issn) {
    const book = await models.Book.findByPk(issn);
    if(!book){
      throw boom.notFound('Book not found');
    }
    return book;

  }

  async update(issn, changes) {
    const book = await this.findOne(issn);
    const rta = await book.update(changes);
    return rta;

  }

  async delete(issn) {
    const book = await this.findOne(issn);
    await book.destroy();
    return{issn}
  }

}

module.exports = BookService;
