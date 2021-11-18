const express = require('express');
const router = express.Router();
const workxpController = require('../controllers/worxkpController')

//workxp title, description, link, antique
router.get('/', workxpController.GET)

router.post('/', workxpController.POST)

router.put("/:id", workxpController.PUT)

router.delete("/:id", workxpController.DELETE)

module.exports = router;