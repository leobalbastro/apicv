const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')
//contact phone , mail, socialmedia
router.get('/', contactController.GET)

router.post('/', contactController.POST)

router.put("/:id", contactController.PUT)

module.exports = router;