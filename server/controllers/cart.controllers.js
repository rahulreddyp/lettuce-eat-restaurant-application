// Author: Deeksha Sareen
const Cart = require("../models/cart.models");

const getAllCart = (req, res) => {
  Cart.find((err, cartitems) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json(cartitems);
  });
};

module.exports = {
  getAllCart,
};
