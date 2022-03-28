// Author: Rahul Reddy Puchakayala

const mongoose = require("mongoose");

const Category = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
      maxlength: 32,
      unique: true,
      required: true,      
    },
  },
  {
    collection: 'FoodCategories'
},
//   { timestamps: true }
);

module.exports = mongoose.model("FoodCategories", Category);
