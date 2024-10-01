const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        // minlength: 8,
        // maxlength: 255,
        // match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        // message: 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    phoneNumber: {
        type: String,
    },
    addresses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address'
        }
    ],
    cart:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart'
    },
    paymentInformation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'paymentInformation'
        }
    ],
    rating: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'rating'
        }
    ],
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'review'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('user', userSchema);