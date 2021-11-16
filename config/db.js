const mongoose = require('mongoose');
const uri  = "mongodb://localhost/apiRESTTutorial";
mongoose.connect(uri).catch(e => console.log(e));