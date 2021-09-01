const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    issue:{
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    body:{
        type: String,
        required: true
    },
    datePosted:{
        type:Date,
        required: true, 
        default: Date.now
    },
    dateEdited: {
        type:Date,
        required: false,
        default: Date.now
    },
    parentComment: {
        type: Schema.Types.ObjectId, 
        ref: "Comment",
        required: false
    }
})

module.exports = mongoose.model('Comment', CommentSchema)