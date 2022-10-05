
const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact')

router.get('/contactus',contactController.getContactDetails)

router.post('/contactus',contactController.postContact)

module.exports = router;