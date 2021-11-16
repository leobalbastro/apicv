const express = require('express');
const skill = require('../models/skills')
const router=express.Router(); //Declaracion del router de skills



router.get('/', async(req,res)=>{
    res.send(await skill.find());
})

router.post('/',async(req,res)=>{
    const {title, description} = req.body;
    const newSkill = new skill({title , description});
    await newSkill.save();
    res.json("Skill Succesfully Created!")
})
router.put("/:id", async(req,res)=>{
    const skillID = req.params.id;
    const update  = req.body;
    skill.findByIdAndUpdate(skillID, update, (err, skillUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: skillUpdated});
    })
})

router.delete("/:id",async (req,res)=>{
    const deletedSkill = await skill.findOneAndDelete({id : req.params.id});
    deletedSkill ? res.json("OK"):res.json("Error");
})

module.exports = router;