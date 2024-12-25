const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authenticate')
const orderController = require('../controllers/order.controller');



router.post('/', authenticate, orderController.createOrder);
router.get('/user', authenticate, orderController.orderHistory);
router.get('/:id', authenticate, orderController.findOrderById);

module.exports = router;