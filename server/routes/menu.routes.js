const express = require("express");
const menuControllers = require("../Controllers/menu.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();
//params
router.param("itemId", menuControllers.getMenuItemById);

router.get("/menu", menuControllers.getAllMenu);
router.get("/menu/:itemId", menuControllers.getMenuItem);

//  checkAuth.verifyToken,

module.exports = router;
