/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 * @author Aadil Sadik Shaikh <ad979991@dal.ca>
 */
const express = require("express");
const orderControllers = require("../controllers/order.controllers");
const checkAuth = require("../middlewares/checkAuth.middlewares");
const router = express.Router();

router.get("/getOrder/:id", orderControllers.getSpecificOrder);

router.post("/updateOrder/:id", orderControllers.updateOrder);
router.get("/getAllOrders", orderControllers.getAllOrders);
router.get("/getAllOrders/:userId", orderControllers.getAllOrdersByUser);
router.post("/createOrder", orderControllers.createOrder);
router.get("/getOrderById/:id", orderControllers.getOrderById);
router.post("/updateOrderStatus/:id", orderControllers.updateOrderStatus);

module.exports = router;
