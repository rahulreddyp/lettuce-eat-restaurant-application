const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    code: { type: String, required: true },
    expireIn: { type: Number, required: true },
  },
  {
    collection: "otp-data",
  }
);

const otpmodel = mongoose.model("otpData", otpSchema);

module.exports = otpmodel;
