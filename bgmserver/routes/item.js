const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/User')
const Item = require('../models/Item')
const Game = require('../models/Game')
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

router.post("/searchItems", (req, res, next) => {
  const {stringToSearch} = req.body;
  Item.find( { name: {$regex: `${stringToSearch}`, $options: "i" }})
  .populate('ownerUser')
  .then(itemList => res.status(200).json(itemList))
  .catch(e => next(e))
})  

router.post("/searchGames", (req, res, next) => {
  const {stringToSearch} = req.body;
  Game.find( { "name.text": {$regex: `${stringToSearch}`, $options: "i" }})
  .then(itemList => {res.status(200).json(itemList)})
  .catch(e => next(e))
})  

router.post("/addItem", (req, res, next) => {
  const {name, yearpublished, image_url, price, condition} = req.body;
  const id = req.user._id;
  return new Item({
    name,
    yearpublished,
    image_url,
    price,
    condition,
    ownerUser: id
  }).save()
  .then( item => res.json({ status: 'New Item Creatd', item }))
  .catch(e => next(e));
})

router.post("/followItem", (req, res, next) => {
  const userId = req.user._id;
  const {itemId} = req.body;
  
  User.findByIdAndUpdate(userId, { $push: { followedItems: itemId } })
  .then( item => res.json({ status: 'Item Followed', item }))
  .catch(e => next(e));
})

router.post("/unfollowItem", (req, res, next) => {
  const userId = req.user._id;
  const {itemId} = req.body;
  User.findByIdAndUpdate(userId, { $pull: { followedItems: itemId } })
  .then( item => res.json({ status: 'Item Unfollowed', item }))
  .catch(e => next(e));
})


module.exports = router;
