const express = require('express');

const ExemplarService = require('../services/exemplar.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createExemplarSchema, updateExemplarSchema, getExemplarSchema } = require('../schemas/exemplar.schema');

const router = express.Router();
const service = new ExemplarService();

router.get('/', async (req, res, next) => {
  try {
    const exemplar = await service.find();
    res.json(exemplar);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getExemplarSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const exemplar = await service.findOne(codigo);
      res.json(exemplar);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createExemplarSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newExemplar = await service.create(body);
      res.status(201).json(newExemplar);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:codigo',
  validatorHandler(getExemplarSchema, 'params'),
  validatorHandler(updateExemplarSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const exemplar = await service.update(codigo, body);
      res.json(exemplar);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:codigo',
  validatorHandler(getExemplarSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      await service.delete(codigo);
      res.status(201).json({codigo});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
