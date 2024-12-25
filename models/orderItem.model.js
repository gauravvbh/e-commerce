const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity:
    {
        type: Number,
        default: 1,
        required: true

    },
    size: {
        type: String,
    },
    totalDiscountedPrice: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('orderItem', orderItemSchema);