const express = require('express');
const contact = require('../models/contact');
const router = express.Router();

//contact phone , mail, socialmedia
router.get('/',async(req,res)=>{
    res.send(await contact.find())
})

router.post('/',async (req,res)=>{
    const {phone, mail, socialmedia} = req.body;
    const setContact = new contact({phone, mail, socialmedia});
    await setContact.save();
    res.json("Bio Succesfully Setted!")
})

router.put("/:id", async(req,res)=>{
    const contactID = req.params.id;
    const update  = req.body;
    contact.findByIdAndUpdate(contactID, update, (err, contactUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: contactUpdated});
    })
})

module.exports = router;