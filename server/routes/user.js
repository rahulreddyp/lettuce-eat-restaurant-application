const router = require("express").Router();

const userController = require("../controllers/userController");
router.get("/status", userController.getStatus);
router.get("/result", userController.getResult);

module.exports = router;
