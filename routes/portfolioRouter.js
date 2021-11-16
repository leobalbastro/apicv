const express = require('express');
const portfolio = require('../models/portfolio')
const router = express.Router();

//portfolio title, description
router.get('/',async(req,res)=>{
    res.send(await portfolio.find())
})

router.post('/',async (req,res)=>{
    const {title, description} = req.body;
    const setPortfolio = new portfolio({title , description});
    await setPortfolio.save();
    res.json("Portfolio Succesfully Setted!")
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