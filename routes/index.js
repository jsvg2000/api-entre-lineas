const express = require('express');
const booksRouter = require('./books.router');
const usersRouter = require('./users.router');
const storesRouter = require('./stores.router');
const authRouter = require('./auth.router');
const typeUserRouter = require('./type-user.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/users', usersRouter);
  router.use('/stores', storesRouter);
  router.use('/type-user', typeUserRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
