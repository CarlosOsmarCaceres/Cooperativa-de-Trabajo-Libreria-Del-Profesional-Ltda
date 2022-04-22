const express = require ("express");
const router =express.Router ();

const productsController = require ("../controllers/productsControllers");//Requiero el controlador

/* Ruta para listar productos */
router.get('/', productsController.getAll);
/* Ruta parametrizada de detalle de producto */
router.get('/detalle/:id/:color?', productsController.getOne)

module.exports = router;