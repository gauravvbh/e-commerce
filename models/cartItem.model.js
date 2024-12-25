const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    cart:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
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
    discountPercent: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
})


module.exports = mongoose.model('cartItem', cartItemSchema);