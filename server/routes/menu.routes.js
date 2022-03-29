// Author: Rahul Reddy Puchakayala

const express = require("express");
const menuControllers = require("../Controllers/menu.controllers");
const checkAuth = require('../middlewares/checkAuth.middlewares');
const router = express.Router();

//params
router.param("itemId", menuControllers.getMenuItemById);
router.param("categoryId", menuControllers.getCategoryById);

router.get("/menu", menuControllers.getAllMenu);
router.get("/menu/:itemId", menuControllers.getMenuItem);
router.get("/menu/photo/:itemId", menuControllers.getImageObject);
router.get("/menu/categories", menuControllers.getAllCategories);
router.get("/menu/category/:categoryId", menuControllers.getMenuItemCategory);

router.post("/menu/add", menuControllers.createMenuItem);
router.delete("/menu/:itemId", menuControllers.deleteMenuItem);
router.put("/menu/:itemId", menuControllers.updateMenuItem);

//  checkAuth.verifyToken,

module.exports = router;
