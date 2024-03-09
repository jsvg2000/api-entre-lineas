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
const typeTargetRouter = require('./type-target.router');
const targetRouter = require('./target.router');
const haveTargetRouter = require('./have-target.router');
const stateBuyRouter = require('./state-buy-router');
const buyRouter = require('./buy.router');
const buyBookRouter = require('./buy-book.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/books', booksRouter);
  router.use('/users', usersRouter);
  router.use('/stores', storesRouter);
  router.use('/type-user', typeUserRouter);
  router.use('/conversation', conversationRouter);
  router.use('/message', messageRouter);
  router.use('/conversation-user', conversationUserRouter);
  router.use('/exemplar', exemplarRouter);
  router.use('/notices', noticesRouter);
  router.use('/type-target',typeTargetRouter);
  router.use('/target',targetRouter);
  router.use('/have-target',haveTargetRouter);
  router.use('/state-buy',stateBuyRouter);
  router.use('/buy',buyRouter);
  router.use('/buy-book',buyBookRouter);
}

module.exports = routerApi;
