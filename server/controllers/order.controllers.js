const { Router } = require("express");
const router = Router();

const Order = require("../models/order.models");

const createOrder = async (req, res) => {
  const { items, user, orderStatus, quantity, total } = req.body;
  try {
    const newOrder = new Order({
      items,
      user,
      orderStatus,
      quantity,
      total,
    });
    await newOrder.save();
    res.status(200).json({
      sucess: true,
      message: "Order created!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Order creation failed!",
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "-password").populate({
      path: "items",
    });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

const getSpecificOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const order = await Order.findById(id)
      .populate("user", "-password")
      .populate({
        path: "items",
      });
    if (!order) {
      res.status(400).json({
        sucess: false,
        message: "No order exist!",
      });
    }

    res.status(200).send(order);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

const updateOrder = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["items", "total", "orderStatus", "quantity"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const order = await Order.findById(req.params.id).populate("items");
    if (!order) {
      res.status(400).json({
        sucess: false,
        message: "No order found!",
      });
    }

    updates.forEach((update) => (order[update] = req.body[update]));
    await order.save();

    res.send(order);
  } catch (error) {
    console.log(error);
    res.json(500).json({
      sucess: false,
      message: "SOmething went wrong!",
    });
  }
};

module.exports = {
  updateOrder,
  getAllOrders,
  getSpecificOrder,
  createOrder,
};
