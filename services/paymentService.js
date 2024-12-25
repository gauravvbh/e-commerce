const razorpay = require('../config/razorpayClient');
const orderService = require('./order.service');



const createPaymentLink = async (orderId) => {
    try {
        const order = await orderService.findOrderById(orderId);
        console.log(order);

        const paymentLinkRequest = {
            amount: order.totalDiscountedPrice * 100,
            currency: 'INR',
            customer: {
                name: `${order.user.firstName} ${order.user.lastName}`,
                contact: order.shippingAddress.phoneNumber,
                email: order.user.email,
            },
            notify: {
                sms: true,
                email: true
            },
            reminder_enable: true,
            callback_url: `http://localhost:5173/payment/${orderId}`,
            callback_method: 'get'
        };

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url
        };

        console.log("resData:", resData); // Move this line before return
        return resData;
    }
    catch (error) {
        console.error("Error in createPaymentLink:", error);
        throw new Error(error.message);
    }
};



const updatePaymentInfo = async (reqData) => {
    console.log("req data- ", reqData);
    const { paymentId, orderId } = reqData;  // Consistent naming

    try {
        const order = await orderService.findOrderById(orderId);
        const payment = await razorpay.payments.fetch(paymentId);

        if (payment.status === "captured") {
            order.paymentDetails.paymentId = paymentId;
            order.paymentDetails.status = "COMPLETED";
            order.orderStatus = "PLACED";

            await order.save();
        }
        const resData = {
            message: "Your order is placed",
            success: true
        };
        return resData;
    }
    catch (error) {
        console.log("error", error);
        throw new Error(error.message);
    }
};


module.exports = {
    createPaymentLink,
    updatePaymentInfo
}