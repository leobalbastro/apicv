const mongoose = require('mongoose');
const contactSchema = {
    phone : String,
    mail : String,
    socialMedia : String,
}

module.exports = mongoose.model("contact",contactSchema)
