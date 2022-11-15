const express = require('express');

const MessageService = require('../services/message.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createMessageSchema, updateMessageSchema, getMessageSchema } = require('../schemas/message.schema');

const router = express.Router();
const service = new MessageService();

router.get('/', async (req, res, next) => {
  try {
    const message = await service.find();
    res.json(message);
  } catch (error) {
    next(error);
  }
});

router.get('/:idMensaje',
  validatorHandler(getMessageSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idMensaje } = req.params;
      const message = await service.findOne(idMensaje);
      res.json(message);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createMessageSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMessage = await service.create(body);
      res.status(201).json(newMessage);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idMensaje',
  validatorHandler(getMessageSchema, 'params'),
  validatorHandler(updateMessageSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idMensaje } = req.params;
      const body = req.body;
      const message = await service.update(idMensaje, body);
      res.json(message);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idMensaje',
  validatorHandler(getMessageSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idMensaje } = req.params;
      await service.delete(idMensaje);
      res.status(201).json({idMensaje});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
