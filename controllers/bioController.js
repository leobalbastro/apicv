const bio = require('../models/bio')

const bioControllerGET = async(req,res)=>{
    res.send(await bio.find())
}

const bioControllerPOST = async (req,res)=>{
    const {title, description} = req.body;
    const setBio = new bio({title , description});
    await setBio.save();
    res.json("Bio Succesfully Setted!")
}
const bioControllerPUT = async (req,res)=>{
    const bioID = req.params.id;
    const update  = req.body;
    bio.findByIdAndUpdate(bioID, update, (err, bioUpdated)=>{
        err ? res.json("Error") : res.status(200).send({bio: bioUpdated});
    })
}
const bioControllerDELETE = async (req,res)=>{
    const bioDeleted = await bio.findOneAndDelete({id : req.params.id});
    bioDeleted ? res.json("OK"):res.json("Error");
}

module.exports = {
    bioControllerPOST,
    bioControllerGET,
    bioControllerPUT,
    bioControllerDELETE
};