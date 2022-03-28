const express = require("express");
const orderControllers = require("../Controllers/order.controllers");
const checkAuth = require("../middlewares/checkAuth.middlewares");
const router = express.Router();

router.get("/getOrder/:id", orderControllers.getSpecificOrder);

router.post("/updateOrder/:id", orderControllers.updateOrder);
router.get("/getAllOrders", orderControllers.getAllOrders);
router.post("/createOrder", orderControllers.createOrder);
router.get("/getOrderById/:id", orderControllers.getOrderById);
router.post("/updateOrderStatus/:id", orderControllers.updateOrderStatus);

module.exports = router;
