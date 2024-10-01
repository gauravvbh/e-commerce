const express = require('express');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

const paymentController = require('../controllers/payment.controller');


router.post("/:id", authenticate, paymentController.createPaymentLink);
router.get("/", authenticate, paymentController.updatePaymentInfo);

module.exports = router;