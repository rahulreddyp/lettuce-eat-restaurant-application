/*
Author - rahulmoje
*/
const express = require("express");
const paymentControllers = require("../controllers/payments.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();


router.post("/payments", paymentControllers.savePaymentData);
router.post("/addCard", paymentControllers.saveNewCard)
router.get("/cards/:userId", paymentControllers.retrieveUserCards)


module.exports = router;
