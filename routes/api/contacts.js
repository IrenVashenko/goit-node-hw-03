const express = require('express')

const router = express.Router()
const Joi = require('joi');
const {validation} = require("../../middlewares")
const {ctrlMiddleware} = require("../../middlewares");
const {contacts : ctrl} = require('../../controllers');

const contactScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().valid(true, false),
});

router.get('/', ctrlMiddleware(ctrl.listContacts));
router.get('/:id', ctrlMiddleware(ctrl.getContactById));
router.post('/', validation(contactScheme), ctrlMiddleware(ctrl.addContact));
router.put('/:id', validation(contactScheme), ctrlMiddleware(ctrl.updateContact));
router.delete('/:id', ctrlMiddleware(ctrl.removeContact));
router.patch('/:id/favorite', validation(favoriteJoiSchema), ctrlMiddleware(ctrl.favoriteContact));




module.exports = router
