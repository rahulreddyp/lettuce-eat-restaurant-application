/**
 * @author Aadil Sadik Shaikh <ad979991@dal.ca>
 */

const Notification = require("../models/notification.models");

const createNotification = async (req, res) => {
  const { userid, content, read } = req.body;
  try {
    const newNotification = new Notification({
      userid,
      content,
      read,
    });
    await newNotification.save();
    res.status(200).send({
      success: true,
      message: "Notification Created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Some error occured",
      error: err,
    });
  }
};

const getNotificationForUser = async (req, res) => {
  const userid = req.params.id;
  try {
    const notification = await Notification.find({
      userid: `${userid}`,
    });
    notification.length > 0
      ? res.status(200).send({
          success: true,
          notification: notification,
        })
      : res.status(404).send({
          success: false,
          message: "No notifications",
        });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error occured",
      error: err,
    });
  }
};

module.exports = {
  createNotification,
  getNotificationForUser,
};
