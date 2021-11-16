const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    photo : String
})

module.exports = mongoose.model("user",userSchema)