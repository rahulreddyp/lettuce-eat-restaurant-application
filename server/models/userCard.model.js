/*
Author - rahulmoje
*/
const mongoose = require("mongoose");


const UserCard = new mongoose.Schema(
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
        cvv: {
            type: String,
            trim: true,
            required: true
        },
    },
    {
        collection: 'UserCard',
        timestamps: true
    }
);

module.exports = mongoose.model("UserCard", UserCard);

