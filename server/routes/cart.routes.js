//Author: Deeksha Sareen

const express = require("express");
const cartControllers = require("../controllers/cart.controllers");
const router = express.Router();
//params

router.param("itemId", cartControllers.getCartItemById);

router.get("/cart", cartControllers.getAllCart);
router.delete("/cart/:itemId",cartControllers.deleteCartItem);
router.put("/menuitem", cartControllers.moveToCart);
module.exports = router;
