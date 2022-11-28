const express = require('express');

const HaveTargetService = require('../services/have-target.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createHaveTargetSchema, updateHaveTargetSchema, getHaveTargetSchema } = require('../schemas/have-target.schema');

const router = express.Router();
const service = new HaveTargetService();

router.get('/', async (req, res, next) => {
  try {
    const haveTarget = await service.find();
    res.json(haveTarget);
  } catch (error) {
    next(error);
  }
});

router.get('/:idTieneTarjeta',
  validatorHandler(getHaveTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTieneTarjeta } = req.params;
      const haveTarget = await service.findOne(idTieneTarjeta);
      res.json(haveTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createHaveTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newHaveTarget = await service.create(body);
      res.status(201).json(newHaveTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idTieneTarjeta',
  validatorHandler(getHaveTargetSchema, 'params'),
  validatorHandler(updateHaveTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idTieneTarjeta } = req.params;
      const body = req.body;
      const haveTarget = await service.update(idTieneTarjeta, body);
      res.json(haveTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idTieneTarjeta',
  validatorHandler(getHaveTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTieneTarjeta } = req.params;
      await service.delete(idTieneTarjeta);
      res.status(201).json({idTieneTarjeta});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
