const express = require('express');

const BookService = require('./../services/book.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createBookSchema, updateBookSchema, getBookSchema } = require('./../schemas/book.schema');

const router = express.Router();
const service = new BookService();

router.get('/', async (req, res, next) => {
  try {
    const books = await service.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

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
  validatorHandler(createBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      console.log(body);
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
