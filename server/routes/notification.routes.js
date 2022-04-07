/**
 * @author : Aadil Shaikh
 */

const express = require("express");
const notifController = require("../controllers/notification.controller");
const router = express.Router();

router.post("/createNotification", notifController.createNotification);
router.get("/getNotification/:id", notifController.getNotificationForUser);
router.get("/getallusers", notifController.getAllUsers);

module.exports = router;
