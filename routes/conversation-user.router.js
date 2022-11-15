const express = require('express');

const ConversationUserService = require('../services/conversation-user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createConversationUserSchema, updateConversationUserSchema, getConversationUserSchema } = require('../schemas/conversation-user.schema');

const router = express.Router();
const service = new ConversationUserService();

router.get('/', async (req, res, next) => {
  try {
    const conversationUser = await service.find();
    res.json(conversationUser);
  } catch (error) {
    next(error);
  }
});

router.get('/:idConversacionUser',
  validatorHandler(getConversationUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idConversacionUser } = req.params;
      const conversationUser = await service.findOne(idConversacionUser);
      res.json(conversationUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createConversationUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newconversationUser = await service.create(body);
      res.status(201).json(newconversationUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idConversacion',
  validatorHandler(getConversationUserSchema, 'params'),
  validatorHandler(updateConversationUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idConversacionUser } = req.params;
      const body = req.body;
      const conversationUser = await service.update(idConversacionUser, body);
      res.json(conversationUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idConversacion',
  validatorHandler(getConversationUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idConversacionUser } = req.params;
      await service.delete(idConversacionUser);
      res.status(201).json({idConversacionUser});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
