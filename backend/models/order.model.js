const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orderItem',
        }
    ],
    orderDate: {
        type: Number,
        required: true,
        default: Date.now
    },
    deliveryDate: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address',
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
            // required: true,
        },
        paymentStatus: {
            type: String,
            required: true,
            default: "Pending",
        },
        transactionId: {
            type: String,
            // required: true,
        },
        paymentId: {
            type: String,
            // required: true,
        },
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Pending",
    },
    totalItems: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})


module.exports = mongoose.model('order', orderSchema);