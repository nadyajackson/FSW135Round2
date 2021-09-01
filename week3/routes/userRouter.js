const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

//Get All
userRouter.get('/', (req,res, next) => {
    User.find((err, userList) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userList)
    })
})

//Post One
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

//Get One
userRouter.get("/:userId", (req, res, next) => {
    User.findOne({_id: req.params.userId}, (err, foundUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted User ${deletedUser.firstName} ${deletedUser.lastName} from the database.`)
    })
})

//Update One
userRouter.put("/:userId", (req, res, next) => {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, (err, updatedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedUser)
    })
})

module.exports = userRouter