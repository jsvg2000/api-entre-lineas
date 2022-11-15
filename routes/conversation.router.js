const express = require('express');

const ConversationService = require('../services/conversation.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createConversationSchema, updateConversationSchema, getConversationSchema, queryConversationSchema } = require('../schemas/conversation.schema');
const { query } = require('express');

const router = express.Router();
const service = new ConversationService();

router.get('/', async (req, res, next) => {
  try {
    const conversation = await service.find();
    res.json(conversation);
  } catch (error) {
    next(error);
  }
});

router.get('/:idConversacion',
  validatorHandler(getConversationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idConversacion } = req.params;
      const conversation = await service.findOne(idConversacion);
      res.json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/message/:idConversacion',
  validatorHandler(queryConversationSchema, 'query'),
  async (req, res, next) => {
    try {
      const { idConversacion } = req.params;
      const conversation = await service.findMessage(idConversacion,req.query);
      res.json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createConversationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newconversation = await service.create(body);
      res.status(201).json(newconversation);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idConversacion',
  validatorHandler(getConversationSchema, 'params'),
  validatorHandler(updateConversationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idConversacion } = req.params;
      const body = req.body;
      const conversation = await service.update(idConversacion, body);
      res.json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idConversacion',
  validatorHandler(getConversationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idConversacion } = req.params;
      await service.delete(idConversacion);
      res.status(201).json({idConversacion});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
