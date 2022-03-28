const mongoose = require("mongoose");

const Wishlist = new mongoose.Schema(
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
    
    
  },  
  {
    collection: 'Wishlist'
  }
//   { timestamps: true }
);

module.exports = mongoose.model("Wishlist", Wishlist);
