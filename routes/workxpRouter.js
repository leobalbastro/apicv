const express = require('express');
const workXP = require('../models/workXP')
const router = express.Router();

//workxp title, description, link, antique
router.get('/',async(req,res)=>{
    res.send(await workXP.find())
})

router.post('/',async (req,res)=>{
    const {title, description, link, antique} = req.body;
    const setExp = new bio({title, description, link, antique});
    await setExp.save();
    res.json("Experience Succesfully Setted!")
})

router.put("/:id", async(req,res)=>{
    const workXPID = req.params.id;
    const update  = req.body;
    workXP.findByIdAndUpdate(workXPID, update, (err, workUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: workUpdated});
    })
})

router.delete("/:id",async (req,res)=>{
    const ExpDeleted = await workXP.findOneAndDelete({id : req.params.id});
    ExpDeleted ? res.json("OK"):res.json("Error");
})

module.exports = router;