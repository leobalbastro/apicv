const mongoose = require('mongoose');
const skillSchema = {
    title : String,
    description : String,
}
module.exports = mongoose.model("skill",skillSchema)
