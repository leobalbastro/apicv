const express = require('express')
const bio = require('../models/bio')
const router = express.Router();
//bio title, description
router.get('/',async(req,res)=>{
    res.send(await bio.find())
})

router.post('/',async (req,res)=>{
    const {title, description} = req.body;
    const setBio = new bio({title , description});
    await setBio.save();
    res.json("Bio Succesfully Setted!")
})

router.put("/:id", async(req,res)=>{
    const bioID = req.params.id;
    const update  = req.body;
    bio.findByIdAndUpdate(bioID, update, (err, bioUpdated)=>{
        err ? res.json("Error") : res.status(200).send({bio: bioUpdated});
    })
})

router.delete("/:id",async (req,res)=>{
    const bioDeleted = await bio.findOneAndDelete({id : req.params.id});
    bioDeleted ? res.json("OK"):res.json("Error");
})

module.exports = router;