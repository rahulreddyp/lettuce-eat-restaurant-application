// const { Router } = require("express");
// const router = Router();

const Order = require("../models/order.models");

const dbConfig = require("../config/db.config");
const mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;

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
      res.json({
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

const getOrderById = async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    try {
      const order = await Order.find({ _id: `${id}` })
        .populate("user", "-password")
        .populate({
          path: "items",
        });
      res.status(200).json({
        success: true,
        order: order,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        sucess: false,
        message: "Something went wrong!",
      });
    }
  } else {
    res.status(500).send({
      success: false,
      message: "Please enter correct OID",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    try {
      const order = await Order.find({ _id: `${id}` });
      if (!order) {
        res.status(500).json({
          success: false,
          message: "Please enter correct order ID",
        });
      }

      mongoClient
        .connect(
          `mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.CLUSTER}.${dbConfig.HOST}/${dbConfig.DB}`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then((client) => {
          const db = client.db("lettuceeat");
          const collection = db.collection("order-data");

          collection
            .updateOne(
              { _id: ObjectId(id) },
              { $set: { orderStatus: req.body.orderStatus } }
            )
            .then((result) => {
              console.log(result);
              if (result.matchedCount === 1) {
                res.status(200);
                res.json({
                  message: "Order Status Updated successfully",
                  success: true,
                });
              } else {
                res.status(404);
                res.json({
                  message: "Order not found",
                  success: false,
                });
              }
            });
        });

      //res.send(order);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else {
    res.status(500).send({
      success: false,
      message: "Please enter correct order ID",
    });
  }
};

module.exports = {
  getAllOrders,
  updateOrder,
  createOrder,
  getOrderById,
  updateOrderStatus,
};
