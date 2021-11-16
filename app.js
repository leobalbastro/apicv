const express = require('express');
const app = express();
const user = require('./models/user')
const routerAPI = require('./routes')
require("./config/db.js")
require("./process.env")

app.use(express.json())
app.set("port", process.env.PORT || 3000)

app.get('/',function (req,res){
    res.send(' [GET] Saludos!')
})

app.listen(app.get("port") , ()=>{
    console.log("El servidor ha sido ejecutado exitosamente.")
})

app.get("/users", async(req,res)=>{
    res.send(await user.find())
})

app.post('/user', async(req,res)=>{
    const { username , password } = req.body;
    const userExists = await user.findOne({username: username});
    if(userExists){
        res.json("Username already taken");
    }else{
        const newUser = new user({username, password});
        await newUser.save();
        res.json("OK");
    }
})

app.put("/user/:username", async(req,res)=>{
    const {usernameUpdate} = req.body;

    const updated = await user.findOneAndUpdate({username : req.params.username}, {username :usernameUpdate});
    updated ? res.json("OK") : res.json("Error");
})

app.delete("/user/:username",async (req,res)=>{
    const deleted = await user.findOneAndDelete({username : req.params.username});
    deleted ? res.json("OK"):res.json("Error");
})

routerAPI(app);