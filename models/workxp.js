const { urlencoded } = require('express');
const mongoose = require('mongoose');
const workSchema = {
    title : String,
    description : String,
    link : String,
    antique : Number,
}
module.exports = mongoose.model("workXP",workSchema)
