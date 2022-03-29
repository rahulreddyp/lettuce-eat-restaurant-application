const mongoose = require("mongoose");


const Coupon = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        discountPercentage: {
            type: Number,
            trim: true,
            required: true
        },
        couponCode: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        expiryDate: {
            type: Date,
            trim: true,
            required: true
        },
    },
    {
        collection: 'Coupon',
        timestamps: true
    }
);

module.exports = mongoose.model("Coupon", Coupon);
