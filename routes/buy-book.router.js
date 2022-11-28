const express = require('express');

const BuyBookService = require('../services/buy-book.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createBuyBookSchema, updateBuyBookSchema, getBuyBookSchema } = require('../schemas/buy-book.schema');

const router = express.Router();
const service = new BuyBookService();

router.get('/', async (req, res, next) => {
  try {
    const BuyBook = await service.find();
    res.json(BuyBook);
  } catch (error) {
    next(error);
  }
});

router.get('/:idCompraLibro',
  validatorHandler(getBuyBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCompraLibro } = req.params;
      const BuyBook = await service.findOne(idCompraLibro);
      res.json(BuyBook);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createBuyBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBuyBook = await service.create(body);
      res.status(201).json(newBuyBook);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idCompraLibro',
  validatorHandler(getBuyBookSchema, 'params'),
  validatorHandler(updateBuyBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idCompraLibro } = req.params;
      const body = req.body;
      const BuyBook = await service.update(idCompraLibro, body);
      res.json(BuyBook);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idCompraLibro',
  validatorHandler(getBuyBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCompraLibro } = req.params;
      await service.delete(idCompraLibro);
      res.status(201).json({idCompraLibro});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
