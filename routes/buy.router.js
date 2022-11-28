const express = require('express');

const BuyService = require('../services/buy.service');

const validatorHandler = require('../middlewares/validator.handler');
const { createBuySchema, updateBuySchema, getBuySchema } = require('../schemas/buy.schema');

const router = express.Router();
const service = new BuyService();

router.get('/', async (req, res, next) => {
  try {
    const buy = await service.find();
    res.json(buy);
  } catch (error) {
    next(error);
  }
});

router.get('/book/:idCompra',
  validatorHandler(getBuySchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCompra } = req.params;
      const compra = await service.findBook(idCompra);
      res.json(compra);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:idCompra',
  validatorHandler(getBuySchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCompra } = req.params;
      const buy = await service.findOne(idCompra);
      res.json(buy);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createBuySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newbuy = await service.create(body);
      res.status(201).json(newbuy);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idCompra',
  validatorHandler(getBuySchema, 'params'),
  validatorHandler(updateBuySchema, 'body'),
  async (req, res, next) => {
    try {
      const { idCompra } = req.params;
      const body = req.body;
      const buy = await service.update(idCompra, body);
      res.json(buy);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idCompra',
  validatorHandler(getBuySchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCompra } = req.params;
      await service.delete(idCompra);
      res.status(201).json({idCompra});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
