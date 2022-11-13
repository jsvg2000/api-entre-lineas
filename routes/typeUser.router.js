const express = require('express');

const typeUserService = require('../services/type-user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createStoreSchema, updateStoreSchema, getStoreSchema } = require('../schemas/store.schema');

const router = express.Router();
const service = new typeUserService();

router.get('/', async (req, res, next) => {
  try {
    const stores = await service.find();
    res.json(stores);
  } catch (error) {
    next(error);
  }
});

router.get('/:idTienda',
  validatorHandler(getStoreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTienda } = req.params;
      const store = await service.findOne(idTienda);
      res.json(store);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createStoreSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newstore = await service.create(body);
      res.status(201).json(newstore);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idTienda',
  validatorHandler(getStoreSchema, 'params'),
  validatorHandler(updateStoreSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idTienda } = req.params;
      const body = req.body;
      const store = await service.update(idTienda, body);
      res.json(store);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idTienda',
  validatorHandler(getStoreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTienda } = req.params;
      await service.delete(idTienda);
      res.status(201).json({idTienda});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
