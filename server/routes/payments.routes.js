const express = require("express");
const paymentControllers = require("../Controllers/payments.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();
//params
//router.param("itemId", menuControllers.getMenuItemById);

router.post("/payments", paymentControllers.savePaymentData);
//router.get("/menu/:itemId", menuControllers.getMenuItem);

//  checkAuth.verifyToken,

module.exports = router;
