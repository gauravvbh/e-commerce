const paymentService = require('../services/paymentService');

const createPaymentLink = async (req, res) => {
    try {
        const paymentLink = await paymentService.createPaymentLink(req.params.id);
        console.log(paymentLink)
        return res.status(201).send(paymentLink);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePaymentInfo = async (req, res) => {
    try {
        await paymentService.updatePaymentInfo(req.query);
        return res.status(200).send({
            message: 'Payment information updated successfully',
            success: true
        });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createPaymentLink,
    updatePaymentInfo
};