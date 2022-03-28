const express = require("express");
const {
  updateOrder,
  getAllOrders,
  getSpecificOrder,
  createOrder,
} = require("../controllers/order.controllers");
const router = express.Router();

router.post("/updateOrder/:id", updateOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrder/:id", getSpecificOrder);
router.post("/createOrder", createOrder);

module.exports = router;
