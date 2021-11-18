const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController')

//languages title, description
router.get('/', languageController.GET)

router.post('/', languageController.POST)

router.put("/:id", languageController.PUT)

router.delete("/:id", languageController.DELETE)

module.exports = router;