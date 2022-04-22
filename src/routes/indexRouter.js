const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');// Requiero el controlador

router.get('/', indexController.index);
router.get('/contacto', indexController.contact);


module.exports = router;