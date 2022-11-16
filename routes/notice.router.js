const express = require('express');

const NoticesService = require('./../services/notices.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createNoticesSchema, updateNoticesSchema, getNoticesSchema } = require('./../schemas/notices.schema');
const passport = require('passport');

const router = express.Router();
const service = new NoticesService();

router.get('/', async (req, res, next) => {
  try {
    const notices = await service.find();
    res.json(notices);
  } catch (error){
    next(error);
  }
});


router.get('/book/:idNoticia',
  //passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {idNoticia}  = req.params;
      const notices = await service.findConversation(idNoticia);
      res.json(notices);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:idNoticia',
  validatorHandler(getNoticesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idNoticia } = req.params;
      const notices = await service.findOne(idNoticia);
      res.json(notices);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createNoticesSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const notices = await service.create(body);
      res.status(201).json(notices);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idNoticia',
  validatorHandler(getNoticesSchema, 'params'),
  validatorHandler(updateNoticesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idNoticia } = req.params;
      const body = req.body;
      const notices = await service.update(idNoticia, body);
      res.json(notices);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idNoticia',
  validatorHandler(getNoticesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idNoticia } = req.params;
      await service.delete(idNoticia);
      res.status(201).json({idNoticia});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
