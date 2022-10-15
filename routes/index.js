const express = require('express');
const booksRouter = require('./books.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
