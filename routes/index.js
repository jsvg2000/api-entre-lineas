const express = require('express');
const booksRouter = require('./books.router');
const usersRouter = require('./users.router');
const storesRouter = require('./stores.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/users', usersRouter);
  router.use('/stores', storesRouter);
}

module.exports = routerApi;
