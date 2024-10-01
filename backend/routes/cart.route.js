const express = require('express');
const router = express.Router();


const authenticate = require('../middlewares/authenticate')
const cartController = require('../controllers/cart.controller');

router.get('/', authenticate, cartController.findUserCart);
router.put('/add', authenticate, cartController.addCartItem);


module.exports = router;