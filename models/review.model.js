const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    review: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('review', reviewSchema);