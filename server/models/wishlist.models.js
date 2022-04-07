// Author: Deeksha Sareen

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

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
      maxlength: 2000,
    },
    price: { type: Number, required: true, maxlength: 32, trim: true },
    photo: {
      data: String,
      }
  },  
  {
    collection: 'Wishlist',
    timestamps: true
}
);

module.exports = mongoose.model("Wishlist", Wishlist);

