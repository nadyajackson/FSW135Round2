const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

//Get All
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issueList) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issueList)
    })
})

//Post One
issueRouter.post("/", (req, res, next) => {
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//Get One
issueRouter.get("/:issueId", (req, res, next) => {
    Issue.findOne({_id: req.params.issueId}, (err, foundIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundIssue)
    })
})

//Delete One
issueRouter.delete("/:issueId", (req, res, next) =>{
    Issue.findOneAndDelete(
        {_id: req.params.issueId}, (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedIssue.topic} from database`)
    })
})

module.exports = issueRouter