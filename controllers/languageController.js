const languages = require('../models/languages');

const GET = async(req,res)=>{
    res.send(await languages.find())
}
const POST = async (req,res)=>{
    const {title, description} = req.body;
    const setLanguage = new languages({title , description});
    await setLanguage.save();
    res.json("Language Succesfully Added!")
}
const PUT = async(req,res)=>{
    const languageID = req.params.id;
    const update  = req.body;
    languages.findByIdAndUpdate(languageID, update, (err, languageUpdated)=>{
        err ? res.json("Error") : res.status(200).send({skill: languageUpdated});
    })
}
const DELETE = async (req,res)=>{
    const deleteLanguage = await languages.findOneAndDelete({id : req.params.id});
    deleteLanguage ? res.json("OK"):res.json("Error");
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
}