const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    cartItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cartItem'
        }
    ],
    totalItems:{
        type: Number,
        default: 0,
        required: true
    },
    totalPrice:
    {
        type: Number,
        default: 0,

    },
    totalDiscountedPrice: {
        type: Number,
        default: 0,
        required: true
    },
    totalDiscount: {
        type: Number,
        default: 0,
        required: true
    }
})


module.exports = mongoose.model('cart', cartSchema);