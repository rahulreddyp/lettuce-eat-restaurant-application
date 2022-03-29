const express = require("express");
const userControllers = require("../Controllers/user.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares')
const router = express.Router();

router.post("/register",userControllers.register);
router.post("/login",userControllers.login);
router.post("/resetmail",userControllers.resetmail);
router.post("/verifyOtp",userControllers.verifyOtp);
router.post("/resetpassword",userControllers.resetPassword);
router.post("/getprofile",checkAuth.verifyToken,userControllers.getProfile);
router.put("/updateprofile",checkAuth.verifyToken,userControllers.updateProfile);
router.post("/deleteprofile",checkAuth.verifyToken,userControllers.deleteProfile);

module.exports = router;