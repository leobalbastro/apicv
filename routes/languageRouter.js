const express = require('express');
const languages = require('../models/languages');
const router = express.Router();

//languages title, description
router.get('/',async(req,res)=>{
    res.send(await languages.find())
})

router.post('/',async (req,res)=>{
    const {title, description} = req.body;
    const setLanguage = new languages({title , description});
    await setLanguage.save();
    res.json("Language Succesfully Added!")
})

router.put("/:id", async(req,res)=>{
    const languageID = req.params.id;
    const update  = req.body;
    languages.findByIdAndUpdate(languageID, update, (err, languageUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: languageUpdated});
    })
})

router.delete("/:id",async (req,res)=>{
    const deleteLanguage = await languages.findOneAndDelete({id : req.params.id});
    deleteLanguage ? res.json("OK"):res.json("Error");
})

module.exports = router;