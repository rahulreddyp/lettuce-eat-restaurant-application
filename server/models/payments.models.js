const mongoose = require("mongoose");


const Payment = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        userEmail: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        cardNumber: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        paymentAmount: {
            type: Number,
            trim: true,
        },
        couponApplied: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
    },
    {
        collection: 'Payment'
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", Payment);
