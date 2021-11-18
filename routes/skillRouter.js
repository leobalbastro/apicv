const express = require('express');
const skillController = require('../controllers/skillController')
const router=express.Router(); //Declaracion del router de skills



router.get('/', skillController.GET)
router.post('/', skillController.POST)
router.put("/:id", skillController.PUT)
router.delete("/:id", skillController.DELETE)

module.exports = router;