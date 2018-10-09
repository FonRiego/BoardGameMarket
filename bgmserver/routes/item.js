const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/User')
const Item = require('../models/Item')
const Message = require('../models/Message')
const Conversation = require('../models/Conversation')


//////// RUTAS PPR HACER!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CRUD: RETRIEVE
router.get('/',(req,res,next) => {
    Model.find()
        .then( objList => res.status(200).json(objList))
        .catch(e => next(e))
})

// CRUD: CREATE
router.post('/',(req,res,next) => {
    const object = _.pickBy(req.body, (e,k) => paths.includes(k));
    Model.create(object)
        .then( obj => res.status(200).json(obj))
        .catch(e => next(e))
})



// CRUD: UPDATE
router.patch('/:id',(req,res,next) => {
    const {id} = req.params;
    const object = _.pickBy(req.body, (e,k) => paths.includes(k));
    const updates = _.pickBy(object, _.identity);
    console.log(updates);
    Model.findByIdAndUpdate(id, updates ,{new:true})
        .then( obj => {
            res.status(200).json({status:'updated',obj});
        })
        .catch(e => next(e))
})

// CRUD: DELETE
router.delete('/:id',(req,res,next) => {
    const {id} = req.params;
    Model.findByIdAndRemove(id)
        .then( obj => {
            if(obj){
                res.status(200).json({status:`Removed from db`});
            }else{
                throw new Error("Not existing ID");
            }
        })
        .catch(e => next(e))
})

module.exports = router;


