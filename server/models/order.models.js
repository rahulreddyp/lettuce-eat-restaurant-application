const mongoose = require("mongoose");
const Order = new mongoose.Schema(
  {
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
    },
    total: {
      type: Number,
      required: true,
    },
    quantity: [Number],
    orderStatus: {
      type: String,
      enum: ["OUT_FOR_DELIVERY", "PREPARING", "DELIVERED"],
    },
  },
  {
    collection: "order-data",
  }
);

const model = mongoose.model("orders", Order);

module.exports = model;
