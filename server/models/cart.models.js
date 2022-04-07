// Author: Deeksha Sareen

const mongoose = require("mongoose");

const Cart = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId
    },
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    price: { type: Number, required: true, maxlength: 32, trim: true },
    category: {
      type: String,
      trim: true,
    },
    photo: {
      data: String
      },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    customization: {
      type: Object,
      trim: true
    },
    size:{
      type:String,
      trim: true
    },
    salt:{
      type: String,
      trim: true
    },
    "spice level":{
      type: String,
      trim: true
    },
    itemvalue:{
      type: String,
      trim: true,
    },
    quantity:{
      type: Number,
      trim: true,
    }
    
  },  
  {
    collection: 'Cart'
  }
//   { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
