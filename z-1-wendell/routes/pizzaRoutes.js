const express = require('express');
const router = express.Router();


const validatePizza = require('../middlewares/validatePizza'); 
const pizzaController = require('../controllers/pizzaController');


router.post('/pizzas', validatePizza, pizzaController.createPizza);

module.exports = router;