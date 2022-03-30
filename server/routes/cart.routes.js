const express = require("express");
const cartControllers = require("../controllers/cart.controllers");
const checkAuth = require("../middlewares/checkAuth.middlewares");
const router = express.Router();
//params

router.get("/cart", cartControllers.getAllCart);
//  checkAuth.verifyToken,

module.exports = router;
