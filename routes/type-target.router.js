const express = require('express');
const typeTargetService = require('../services/type-target.service');
const validatorHandler = require('../middlewares/validator.handler');

const { createTypeTargetSchema, updateTypeTargetSchema, getTypeTargetSchema } = require('../schemas/type-target.schema');


const router = express.Router();
const service = new typeTargetService();

router.get('/',
//passport.authenticate('jwt',{session:false}),
//checkRoles('Root'),
 async (req, res, next) => {
    try {
      const typeTarget = await service.find();
      res.json(typeTarget);
    } catch (error) {
      next(error);
    }
});

router.get('/:idTipoTarjeta',
  validatorHandler(getTypeTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTipoTarjeta } = req.params;
      const typeTarget = await service.findOne(idTipoTarjeta);
      res.json(typeTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',

  validatorHandler(createTypeTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTypeTarget = await service.create(body);
      res.status(201).json(newTypeTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idTipoTarjeta',
  validatorHandler(getTypeTargetSchema, 'params'),
  validatorHandler(updateTypeTargetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idTipoTarjeta } = req.params;
      const body = req.body;
      const typeTarget = await service.update(idTipoTarjeta, body);
      res.json(typeTarget);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idTipoTarjeta',
  validatorHandler(getTypeTargetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTipoTarjeta } = req.params;
      await service.delete(idTipoTarjeta);
      res.status(201).json({idTipoTarjeta});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
