const mongoose = require('mongoose');
const portfolioSchema = {
    title : String,
    description : String,
}
module.exports = mongoose.model("portfolio",portfolioSchema)
