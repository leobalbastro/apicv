const mongoose = require('mongoose');
const languageSchema = {
    title : String,
    description : String,
}
module.exports = mongoose.model("languages",languageSchema)
