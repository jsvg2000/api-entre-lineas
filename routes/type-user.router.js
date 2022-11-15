const express = require('express');
const passport = require('passport');
const typeUserService = require('../services/type-user.service');
const validatorHandler = require('../middlewares/validator.handler');
const {checkRoles} = require('./../middlewares/auth.handler');
const { createTypeUserSchema, updateTypeUserSchema, getTypeUserSchema } = require('../schemas/type-user.schema');


const router = express.Router();
const service = new typeUserService();

router.get('/',
//passport.authenticate('jwt',{session:false}),
//checkRoles('Root'),
 async (req, res, next) => {
    try {
      const typeUser = await service.find();
      res.json(typeUser);
    } catch (error) {
      next(error);
    }
});

router.get('/:idTipoUsuario',
  validatorHandler(getTypeUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTipoUsuario } = req.params;
      const typeUser = await service.findOne(idTipoUsuario);
      res.json(typeUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',

  validatorHandler(createTypeUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTypeUser = await service.create(body);
      res.status(201).json(newTypeUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idTipoUsuario',
  validatorHandler(getTypeUserSchema, 'params'),
  validatorHandler(updateTypeUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idTipoUsuario } = req.params;
      const body = req.body;
      const typeUser = await service.update(idTipoUsuario, body);
      res.json(typeUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idTipoUsuario',
  validatorHandler(getTypeUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTipoUsuario } = req.params;
      await service.delete(idTipoUsuario);
      res.status(201).json({idTipoUsuario});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
