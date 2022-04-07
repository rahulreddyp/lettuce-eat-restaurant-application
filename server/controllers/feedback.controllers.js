const Feedback = require("../models/feedback.models");
const Order = require("../models/order.models");

const createFeedBack = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  try {
    const feedBack = await Feedback.findOne({ order: id });
    if (!feedBack) {
      console.log(content);
      const newFeedback = new Feedback({
        text: content,
        order: id,
      });
      console.log(newFeedback);
      await newFeedback.save();
      res.status(200).json(newFeedback);
    } else {
      feedBack.text = content;
      await feedBack.save();
      res.status(200).json(feedBack);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

const getFeedBackByOrderId = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const order = await Order.findOne({ _id: id });

    if (!order) {
      res.status(400).json({
        sucess: false,
        message: "No order found with the given Id!",
      });
    } else {
      console.log(order);
      const feedback = await Feedback.findOne({ order: id }).populate("order");
      if (feedback === null) {
        res.status(200).json({
          order,
          feedback: "No feedback!",
        });
      }
      res.status(200).json(feedback);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedBacks = await Feedback.find({}).populate("order");
    res.status(200).json(feedBacks);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { createFeedBack, getAllFeedbacks, getFeedBackByOrderId };
