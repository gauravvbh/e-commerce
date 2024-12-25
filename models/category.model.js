const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    parentCategory:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    level:{
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('category', categorySchema);