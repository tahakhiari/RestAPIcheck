const express = require('express')
const router =express.Router()
const User = require("../models/User")



//(POST)
router.post ('/add', async (req,res) => {
    const newUser = new User({ ... req.body})
    await newUser.save()
    .then(user => res.status(200).json({ msg:"user added with success", user}))
     .catch(err=> res.status(400).json(err))

})
//,READ(GET)
router.get ('/',async (req,res) => {
await User.find()
.then(users=>res.status(200).json(users))
.catch(err=> res.status(400).json(err))
})

// UPDATE(PUT),
router.put('/:_id', (req, res) => {
    let { _id } =req.params
    User.findByIdAndUpdate({ _id }, {$set: {...req.body }})
    .then(() => res.status(200).json({msg:"User updated"}))
    .catch(err =>res.status(400).json(err))
})
//DELETE(DELETE)
router.delete('/:_id', (req, res) =>{
    let {_id} =req.params
    User.findByIdAndRemove(_id)
    .then(()=>res.status(200).json({msg:"user has been deleted"}))
    .catch(err=>res.status(400).json(err))

})