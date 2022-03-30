//Author: Deeksha Sareen

const express = require("express");
const cartControllers = require("../controllers/cart.controllers");
const router = express.Router();
//params

router.get("/cart", cartControllers.getAllCart);


module.exports = router;
