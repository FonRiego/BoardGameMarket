const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/User')
const Item = require('../models/Item')
const Message = require('../models/Message')
const Conversation = require('../models/Conversation')


router.get("/profile", (req, res, next) => {
  const id = req.user._id;

  const prom1 = Item.find({ ownerUser: id })
  .populate("ownerUser")

  const prom2 = User.findById(id, "followedItems")
  .populate("followedItems")
  .populate({ 
    path: "followedItems",
    populate: {
      path: "ownerUser"
    } 
  })

  Promise.all([prom1, prom2])
  .then(([ownedList, followedList]) => {
    res.status(200).json({ownedList, followedList})
  })
  .catch(e => next(e))
})

router.post("/delete", (req, res, next) => {
  const id = req.body.itemId;
  Item.findByIdAndDelete(id)
  .then(() => {
    res.status(200).json({message:'item deleted'})
  })






})



module.exports = router;
