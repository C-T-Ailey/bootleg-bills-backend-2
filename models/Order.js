const mongoose = require('mongoose');

// Order model schema

const orderSchema = mongoose.Schema({
    orderRef: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    }],
    userOrder: {
        type: String,
        ref: "Order"
    },
    totalPrice: {
        type: Number,
        required: true
    },
    paymentDetails: {
        customerName: {
            type: String,
            required: true,
            minLength: [5, 'Your cardholder name must be at least 5 characters.']
        },
        cardNumber: {
            type: Number,
            required: true,
            length: [16, 'Your card number must be 16 digits']
        },
        expiryDate: {
            type: Date,
            required: true
        },
        cvv: {
            type: Number,
            required: true,
            length: [3, "Your CVV is the three digit number on the back of your card"]
        }
    },
    billingAddress: {
        lineOne: {
            type: String,
            required: true
        },
        lineTwo: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        }
    },
    shippingAddress: {
        customerEmail: {
            type: String,
            required: true
        },
        lineOne: {
            type: String,
            required: true
        },
        lineTwo: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        lowercase: true,
        default: 'open'
    },
    mixForm: {
        caseArt: {
            type: String
        },
        artSideA: {
            type: String
        },
        artSideB: {
            type: String
        },
        shellColour: {
            type: String
        },
        trackList: {
            type: String
        }
    }
},
{
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};