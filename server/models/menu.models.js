// Author: Rahul Reddy Puchakayala

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Menu = new mongoose.Schema(
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
    category: {
      type: ObjectId,
      ref: "FoodCategories",
      required: true,
    },
    dietary: {
      type: String,
      maxlength: 32,
      trim: true
    },
    customization: {
      type: Object,
      default: { "size": [], "toppings": []}
      // maxlength: 32,
      // trim: true
    },
    price: { type: Number, required: true, maxlength: 32, trim: true },
    photo: {
        data: String,
        // data: Buffer,
        // contentType: String,
      }
  },  
  {
    collection: 'Menu',
    timestamps: true
}
);

module.exports = mongoose.model("Menu", Menu);
