const express = require('express');

const booksRouter = require('./books.router');
const usersRouter = require('./users.router');
const storesRouter = require('./stores.router');
const authRouter = require('./auth.router');
const typeUserRouter = require('./type-user.router');
const conversationRouter = require('./conversation.router');
const messageRouter = require('./message.router');
const conversationUserRouter = require('./conversation-user.router');
const exemplarRouter = require('./exemplar.router');
const noticesRouter = require('./notice.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/users', usersRouter);
  router.use('/stores', storesRouter);
  router.use('/type-user', typeUserRouter);
  router.use('/auth', authRouter);
  router.use('/conversation', conversationRouter);
  router.use('/message', messageRouter);
  router.use('/conversation-user', conversationUserRouter);
  router.use('/exemplar', exemplarRouter);
  router.use('/notices', noticesRouter);
}

module.exports = routerApi;
