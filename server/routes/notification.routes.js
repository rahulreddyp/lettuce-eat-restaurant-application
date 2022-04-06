/**
 * @author : Aadil Shaikh
 */

const express = require("express");
const notifController = require("../controllers/notification.controller");
const router = express.Router();

router.post("/createNotification", notifController.createNotification);

module.exports = router;
