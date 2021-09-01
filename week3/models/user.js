const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    /*  email: {
        type: email,
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true
    }, */
    phoneNumber: {
        type: Number, 
        required: false,
        unique: true
    },
    username:{
        type:String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    },
    datePosted: {
        type: Date,
        required: true, 
        default: Date.now
    },
    dateEdited: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)