/**
 * @author : Aadil Shaikh
 */

const mongoose = require("mongoose");

const notification = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    content: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
