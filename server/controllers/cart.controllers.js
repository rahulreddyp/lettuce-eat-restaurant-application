// Author: Deeksha Sareen
const Cart = require("../models/cart.models");

const getCartItemById = (req, res, next, id) => {
  Cart.findById(id).exec((err, item) => {
    if (err || !item) {
      return res.status(400).json({
        error: "Item not found in DB",
      });
    }

    req.cartitem = item;
    next();
  });
};

const getAllCart = (req, res) => {
  Cart.find((err, cartitems) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json(cartitems);
  });
};

const moveToCart = (req, res) => {
  console.log("Step 3" + req.body.name);
  Cart.findOne({ name: req.body.name }).then((results) => {
    if (!results) {
      const cart = new Cart(req.body);
      cart.save();
      return res
        .status(200)
        .json({ success: true, message: "Item added to cart" });
    } else {
      return res
        .status(200)
        .json({ success: false, error: "Item already in Cart" });
    }
  });
};

const deleteCartAll = (req, res) => {
  Cart.remove({}, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json({ success: true, message: "Cart cleared" });
  }
  );
}
const deleteCartItem = (req, res) => {
  const userID = req.cartitem._id;
  console.log(userID);
  Cart.findByIdAndDelete(userID, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    } else if (!result) {
      return res.status(204).json({ success: false, error: "some error" });
    } else {
      return res.status(200).json({ success: true });
    }
  });
};
module.exports = {
  getAllCart,
  deleteCartItem,
  getCartItemById,
  moveToCart,
  deleteCartAll
};
