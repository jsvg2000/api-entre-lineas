const faker = require('faker');
const boom = require('@hapi/boom');

class BooksService {

  constructor(){
    this.books = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.books.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newBook = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.books.push(newBook);
    return newBook;
  }

  async find() {
    return this.books;
  }

  async findOne(id) {
    const book = this.books.find(item => item.id === id);
    if (!book) {
      throw boom.notFound('book not found');
    }
    if (book.isBlock) {
      throw boom.conflict('book is block');
    }
    return book;
  }

  async update(id, changes) {
    const index = this.books.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('book not found');
    }
    const book = this.books[index];
    this.books[index] = {
      ...book,
      ...changes
    };
    return this.books[index];
  }

  async delete(id) {
    const index = this.books.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('book not found');
    }
    this.books.splice(index, 1);
    return { id };
  }

}

module.exports = BooksService;
