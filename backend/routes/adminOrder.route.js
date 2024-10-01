const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authenticate')
const orderController = require('../controllers/adminOrder.contoller');


router.get('/', authenticate, orderController.getAllOrders);
router.put('/:orderId/confirmed', authenticate, orderController.confirmedOrders);
router.put('/:orderId/ship', authenticate, orderController.shipOrder);
router.put('/:orderId/deliver', authenticate, orderController.deliverOrder);
router.put('/:orderId/cancel', authenticate, orderController.cancelOrder);
router.put('/:orderId/delete', authenticate, orderController.deleteOrder);

module.exports = router;