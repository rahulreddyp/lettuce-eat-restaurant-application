const express = require("express");
const paymentControllers = require("../Controllers/payments.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();


router.post("/payments", paymentControllers.savePaymentData);


module.exports = router;
