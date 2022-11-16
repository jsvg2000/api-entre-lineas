const express = require('express');
const passport = require('passport');

const BookService = require('./../services/book.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {checkRoles} = require('./../middlewares/auth.handler');

const { createBookSchema, updateBookSchema, getBookSchema } = require('./../schemas/book.schema');

const router = express.Router();
const service = new BookService();

router.get('/',
  //passport.authenticate('jwt',{session:false}),
 //checkRoles(1,2),
 async (req, res, next) => {
    try {
      const books = await service.find();
      res.json(books);
    } catch (error) {
      next(error);
    }
});

router.get('/store/:issn',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const {issn} = req.params;
      const book = await service.findStore(issn);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/notices/:issn',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const {issn} = req.params;
      const book = await service.findNotices(issn);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:issn',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { issn } = req.params;
      const book = await service.findOne(issn);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  //passport.authenticate('jwt',{session:false}),
  //checkRoles(1,2),
  validatorHandler(createBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newbook = await service.create(body);
      res.status(201).json(newbook);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:issn',
  validatorHandler(getBookSchema, 'params'),
  validatorHandler(updateBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const { issn } = req.params;
      const body = req.body;
      const book = await service.update(issn, body);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:issn',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { issn } = req.params;
      await service.delete(issn);
      res.status(201).json({issn});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
