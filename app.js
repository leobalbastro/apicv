const express = require('express');
const app = express();
const routerAPI = require('./routes/index')
require("./config/db.js")
require('dotenv').config();

app.use(express.json())
app.set("port", process.env.PORT || 3000)

app.get('/',function (req,res){
    res.send(' [GET] Saludos!')
})

app.listen(app.get("port") , ()=>{
    console.log("El servidor ha sido ejecutado exitosamente.")
})

routerAPI(app);