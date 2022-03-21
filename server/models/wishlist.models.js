const mongoose = require("mongoose");
// const {ObjectId} = mongoose.Schema;

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
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    category: {
      type: Number,
      trim: true,
    },
    // sizes: {},
    price: { type: Number, required: true, maxlength: 32, trim: true },
    photo: {
        data: Buffer,
        contentType: String
      }
  },  
  {
    collection: 'Wishlist'
  }
//   { timestamps: true }
);

module.exports = mongoose.model("Wishlist", Wishlist);
