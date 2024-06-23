const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        lowercase: true,
        default: 'active'
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
},
{
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {Cart};