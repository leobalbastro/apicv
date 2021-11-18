const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController')
//portfolio title, description
router.get('/', portfolioController.GET)

router.post('/', portfolioController.POST)

router.put("/:id", portfolioController.PUT)

router.delete("/:id", portfolioController.DELETE)

module.exports = router;