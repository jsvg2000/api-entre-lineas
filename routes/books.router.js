const express = require('express');

const BooksService = require('./../services/book.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createBookSchema, updateBookSchema, getBookSchema } = require('./../schemas/book.schema');

const router = express.Router();
const service = new BooksService();

router.get('/', async (req, res, next) => {
  try {
    const books = await service.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await service.findOne(id);
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
      const newbook = await service.create(body);
      res.status(201).json(newbook);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getBookSchema, 'params'),
  validatorHandler(updateBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const book = await service.update(id, body);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
