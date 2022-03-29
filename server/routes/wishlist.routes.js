const express = require("express");
const wishlistControllers = require("../controllers/wishlist.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();
//params
router.param("itemId", wishlistControllers.getWishlistItemById);

router.get("/wishlist", wishlistControllers.getAllWishlist);
router.get("/wishlist/:itemId", wishlistControllers.getWishlistItem);
router.post("/menuitem", wishlistControllers.putWishlistItem);
//  checkAuth.verifyToken,

module.exports = router;
