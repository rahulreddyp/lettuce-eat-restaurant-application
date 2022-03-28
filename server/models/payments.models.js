const mongoose = require("mongoose");


const Payment = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        userId: {
            type: String,
            trim: true,
            required: true,
            maxlength: 1024
        },
        userEmail: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        orderId: {
            type: Number,
            trim: true,
            required: true
        },
        cardType: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        cardNumber: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        cardName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        cardValidity: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        paymentAmount: {
            type: Number,
            trim: true,
            required: true
        },
        couponCode: {
            type: String,
            trim: true,
            required: false,
            maxlength: 32,
        },
    },
    {
        collection: 'Payment',
        timestamps: true
    },
    
);

module.exports = mongoose.model("Payment", Payment);
