const express = require('express')
const router = express.Router();
const bioController = require('../controllers/bioController')
//bio title, description
router.get('/', bioController.bioControllerGET)

router.post('/', bioController.bioControllerPOST)

router.put("/:id", bioController.bioControllerPUT)

router.delete("/:id", bioController.bioControllerDELETE)

module.exports = router;