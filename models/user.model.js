/**
 *  We are holding schema of user here
 * 
 * 
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlenght: 10,
        lowercase: true
    },
    userType:{
        type: String,
        required: true,
        default: "Customer",
        enum: ["CUSTOMER", "ADMIN"]
    }
},{timestamps: true});

/**
 * Define user to be storred in schema
 */
module.exports = mongoose.model("User", userSchema);