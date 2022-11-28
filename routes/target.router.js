const express = require('express');
const targetService = require('../services/target.service');
const validatorHandler = require('../middlewares/validator.handler');

const { createTargetSchema, updateTargetSchema, getTargetSchema } = require('../schemas/target.schema');


const router = express.Router();
const service = new targetService();

router.get('/',
//passport.authenticate('jwt',{session:false}),
//checkRoles('Root'),
 async (req, res, next) => {
    try {
      const target = await service.find();
      res.json(target);
    } catch (error) {
      next(error);
    }
});

router.get('/:numeroTarjeta',
  validatorHandler(getTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { numeroTarjeta } = req.params;
      const target = await service.findOne(numeroTarjeta);
      res.json(target);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',

  validatorHandler(createTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newtarget = await service.create(body);
      res.status(201).json(newtarget);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:numeroTarjeta',
  validatorHandler(getTargetSchema, 'params'),
  validatorHandler(updateTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { numeroTarjeta } = req.params;
      const body = req.body;
      const target = await service.update(numeroTarjeta, body);
      res.json(target);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:numeroTarjeta',
  validatorHandler(getTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { numeroTarjeta } = req.params;
      await service.delete(numeroTarjeta);
      res.status(201).json({numeroTarjeta});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
