const Address = require('../models/address.model')
const cartService = require('../services/cart.service')
const OrderItem = require('../models/orderItem.model')
const Order = require('../models/order.model')
const User = require('../models/user.model')


const createOrder = async (userId, shippingAddress) => {
    let address;
    if (shippingAddress._id) {
        let existAddress = await Address.findById(shippingAddress._id);
        address = existAddress;
    }
    else {
        address = new Address(shippingAddress);
        address.user = userId;
        await address.save();

        const user = await User.findById(userId);
        user.addresses.push(address);
        await user.save();
    }

    const cart = await cartService.findUserCart(userId);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId,
            totalDiscountedPrice: item.totalDiscountedPrice
        })
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem);
    }

    const calculateDeliveryDate = () => {
        const today = new Date();
        const deliveryDate = new Date(today.setDate(today.getDate() + 5));
        return deliveryDate;
    };

    const deliveryDate = calculateDeliveryDate();

    const createOrder = new Order({
        user: userId,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        shippingAddress: address,
        totalItems: cart.totalItems,
        deliveryDate
    });

    let savedOrder = await createOrder.save();
    savedOrder = await savedOrder.populate('user');

    return savedOrder;
}

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);
    order.status = "Placed";
    order.paymentDetails.status = "Completed";

    return await order.save();
}

async function confirmOrder(orderId) {
    const order = await findOrderById(orderId);
    order.status = "Confirmed";

    return await order.save();
}
async function shipOrder(orderId) {
    const order = await findOrderById(orderId);
    order.status = "Shipped";

    return await order.save();
}
async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);
    order.status = "Delivered";

    return await order.save();
}
async function cancelOrder(orderId) {
    const order = await findOrderById(orderId);
    order.status = "Cancelled";

    return await order.save();
}
async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress");

    return order;
}

async function userOrderHistory(userId) {
    try {
        const orders = await Order.find({ userId: userId, orderStatus: "Placed" })
            .populate({ path: "orderItems", populate: { path: "Product" } }).lean()

        return orders;
    }
    catch (err) {
        throw new Error(err.message);
    }
}

async function getAllOrders() {
    return await Order.find()
        .populate({ path: "orderItems", populate: { path: "product" } }).lean()
}

async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.fibdByIdAndDelete(order._id);
}


module.exports = {
    createOrder,
    placeOrder,
    confirmOrder,
    shipOrder,
    deliverOrder,
    cancelOrder,
    findOrderById,
    userOrderHistory,
    getAllOrders,
    deleteOrder,
}