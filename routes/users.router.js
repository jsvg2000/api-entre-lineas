const express = require('express');

const UsersService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/user.schema');
const passport = require('passport');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/target/:usuario',
  //passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      //const user  = req.user;
      const { usuario } = req.params;
      const conversaciones = await service.findTarget(usuario);
      res.json(conversaciones);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/buy/:usuario',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const {usuario} = req.params;
      const compra = await service.findBuy(usuario);
      res.json(compra);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/conversation/:usuario',
  async (req, res, next) => {
    try {
      const { usuario } = req.params;
      const conversaciones = await service.findConversation(usuario);
      res.json(conversaciones);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:usuario',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { usuario } = req.params;
      const user = await service.findOne(usuario);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:usuario',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { usuario } = req.params;
      const body = req.body;
      const user = await service.update(usuario, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:usuario',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { usuario } = req.params;
      await service.delete(usuario);
      res.status(201).json({usuario});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
