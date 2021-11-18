const workXP = require('../models/workXP')

const GET = async(req,res)=>{
    res.send(await workXP.find())
}
const POST = async (req,res)=>{
    const {title, description, link, antique} = req.body;
    const setExp = new bio({title, description, link, antique});
    await setExp.save();
    res.json("Experience Succesfully Setted!")
}
const PUT = async(req,res)=>{
    const workXPID = req.params.id;
    const update  = req.body;
    workXP.findByIdAndUpdate(workXPID, update, (err, workUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: workUpdated});
    })
}
const DELETE = async (req,res)=>{
    const ExpDeleted = await workXP.findOneAndDelete({id : req.params.id});
    ExpDeleted ? res.json("OK"):res.json("Error");
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
}