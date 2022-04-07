const express = require("express");
const {
  createFeedBack,
  getAllFeedbacks,
  getFeedBackByOrderId,
} = require("../controllers/feedback.controllers");
const router = express.Router();

router.post("/createFeedBack/:id", createFeedBack);
router.get("/getFeedbacks", getAllFeedbacks);
router.get("/getFeedbacks/:id", getFeedBackByOrderId);

module.exports = router;
