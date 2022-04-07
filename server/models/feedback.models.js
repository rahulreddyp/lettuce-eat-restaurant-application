/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 */
const mongoose = require("mongoose");
const Feedback = new mongoose.Schema({
  text: {
    type: String,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders",
  },
  ratting: {
    type: Number,
  },
});

const model = mongoose.model("feedback", Feedback);

module.exports = model;
