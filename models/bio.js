const mongoose = require('mongoose');
const bioSchema = {
    title : String,
    description : String,
}
module.exports = mongoose.model("bio",bioSchema)