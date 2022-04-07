/*
Author - rahulmoje
*/
const express = require("express");
const couponController = require("../controllers/coupon.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();


router.get("/applyCoupon/:couponCode", couponController.applyCouponCode);
router.get("/coupons", couponController.retrieveCoupons)
router.post("/coupons", couponController.saveCoupon)


module.exports = router;
