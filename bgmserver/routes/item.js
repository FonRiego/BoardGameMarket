const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/User')
const Item = require('../models/Item')
const Message = require('../models/Message')
const Conversation = require('../models/Conversation')

router.post('/owned', (req, res, next) => {
  const id = req.body.userId
  Item.find({ownerUser: id})
  .populate('ownerUser')
  .then(itemList => res.status(200).json(itemList))
  .catch(e => next(e))
})

module.exports = router;
