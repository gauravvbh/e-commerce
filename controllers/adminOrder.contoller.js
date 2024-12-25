const orderService=require('../services/order.service')




const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const confirmedOrders = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = await orderService.confirmOrder(orderId);
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const shipOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deliverOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllOrders, confirmedOrders, shipOrder, deliverOrder, cancelOrder, deleteOrder };