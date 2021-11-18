const skill = require('../models/skills')

const GET =async(req,res)=>{
    res.send(await skill.find());
}
const POST = async(req,res)=>{
    const {title, description} = req.body;
    const newSkill = new skill({title , description});
    await newSkill.save();
    res.json("Skill Succesfully Created!")
}
const PUT = async(req,res)=>{
    const skillID = req.params.id;
    const update  = req.body;
    skill.findByIdAndUpdate(skillID, update, (err, skillUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: skillUpdated});
    })
}
const DELETE = async (req,res)=>{
    const deletedSkill = await skill.findOneAndDelete({id : req.params.id});
    deletedSkill ? res.json("OK"):res.json("Error");
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
}