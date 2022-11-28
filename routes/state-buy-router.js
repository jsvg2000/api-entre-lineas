const express = require('express');

const stateBuyService = require('../services/state-buy.services');

const validatorHandler = require('../middlewares/validator.handler');

const { createStateBuySchema, updateStateBuySchema, getStateBuySchema } = require('../schemas/state-buy.schema');


const router = express.Router();
const service = new stateBuyService();

router.get('/',
 async (req, res, next) => {
    try {
      const stateBuy = await service.find();
      res.json(stateBuy);
    } catch (error) {
      next(error);
    }
});

router.get('/:idEstadoCompra',
  validatorHandler(getStateBuySchema, 'params'),
  async (req, res, next) => {
    try {
      const { idEstadoCompra } = req.params;
      const stateBuy = await service.findOne(idEstadoCompra);
      res.json(stateBuy);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',

  validatorHandler(createStateBuySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newstateBuy = await service.create(body);
      res.status(201).json(newstateBuy);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idEstadoCompra',
  validatorHandler(getStateBuySchema, 'params'),
  validatorHandler(updateStateBuySchema, 'body'),
  async (req, res, next) => {
    try {
      const { idEstadoCompra } = req.params;
      const body = req.body;
      const stateBuy = await service.update(idEstadoCompra, body);
      res.json(stateBuy);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idEstadoCompra',
  validatorHandler(getStateBuySchema, 'params'),
  async (req, res, next) => {
    try {
      const { idEstadoCompra } = req.params;
      await service.delete(idEstadoCompra);
      res.status(201).json({idEstadoCompra});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
