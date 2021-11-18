const mongoose = require('mongoose');
require('dotenv').config();
const uri  = process.env.DB;
mongoose.connect(uri).catch(e => console.log(e));