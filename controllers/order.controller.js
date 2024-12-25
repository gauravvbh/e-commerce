const orderService = require('../services/order.service')


const createOrder = async (req, res) => {
    try {
        const { user } = req;
        let createdOrder = await orderService.createOrder(user._id, req.body);
        return res.status(201).send(createdOrder);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const findOrderById = async (req, res) => {
    try {
        const { user } = req;
        let createdOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createdOrder);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const orderHistory = async (req, res) => {
    try {
        const { user } = req;
        let createdOrder = await orderService.userOrderHistory(user._id);
        return res.status(201).send(createdOrder);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}



module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
}