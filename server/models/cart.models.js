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
      type: Number,
      trim: true,
    },
    photo: {
      type: String,
      required: true
      },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    value:{
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
