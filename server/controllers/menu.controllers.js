const Menu = require("../Models/menu.models");
const formidable = require("formidable");
const fs = require("fs");
const Category = require("../models/categories.models");
const _ = require("lodash");

const createMenuItem = (req, res) => {
  console.log("request");
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "Error in form, please try again",
          err,
        });
      }
      // const { body } = req;
      // const menu = _.extend(body, fields);
      const menuItem = new Menu(fields);

      if (file.photo) {
        if (file.photo.size > 5000000) {
          return res.status(400).json({
            error: "File size is big, Max: 5 MB",
          });
        }

        menuItem.photo.data = fs.readFileSync(file.photo.filepath);
        menuItem.photo.contentType = file.photo.type;
      }

      menuItem.save((err, item) => {
        if (err) {
          res.status(400).json({
            error: "Error occurred when saving Item to database!",
            err,
          });
        } else {
          res.status(200).json({ message: "Item added to menu successfully!" });
        }
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error occurred: ",
      err,
    });
  }
};

const getAllMenu = (req, res) => {
  Menu.find()
    .populate("category")
    .exec((err, menuitems) => {
      if (err) {
        return res.status(400).json({
          error: "Menu not found",
        });
      }
      return res.status(200).json(menuitems);
    });
};

const getMenuItemById = (req, res, next, id) => {
  Menu.findById(id).exec((err, item) => {
    if (err || !item) {
      return res.status(400).json({
        error: "Item not found in DB",
      });
    }
    req.menuitem = item;
    next();
  });
};

const getMenuItem = (req, res) => {
  // req.menu.photo = undefined
  return res.json(req.menuitem);
};

// Middleware
const getMenuItemPhoto = (req, res, next) => {
  if (req.menuitem.alt_photo) {
    console.log("inside");
    // res.set("Content-Type", req.menuitem.alt_photo.contentType)
    res.set("Content-Type", "binary/octet-stream");
    return res.send(req.menuitem.alt_photo.data);
  }
  next();
};

const getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Food Category not found",
      });
    }
    req.category = cate;
    next();
  });
};

const getAllCategories = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "No food categories exists in DB",
        err,
      });
    }
    return res.json(data);
  });
};

const getMenuItemCategory = (req, res) => {
    return res.json(req.category);
};

const updateMenuItem = (req, res) => {
  console.log("update request");
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "Error in form, please try again",
          err,
        });
      }

      let menuItem = req.menuItem;
      menuItem = _.extend(menuItem, fields);

      if (file.photo) {
        if (file.photo.size > 5000000) {
          return res.status(400).json({
            error: "File size is big, Max: 5 MB",
          });
        }

        menuItem.photo.data = fs.readFileSync(file.photo.filepath);
        menuItem.photo.contentType = file.photo.type;
      }

      menuItem.save((err, item) => {
        if (err) {
          res.status(400).json({
            error: "Error occurred when updating Item to database!" + err,
          });
        }
        //   res
        //     .status(200)
        //     .json({ message: "Menu Item updated successfully!", item });   
                        
            res.writeHead(200, {'content-type' : 'application/json'})
            res.end(item, null, 2);
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error occurred: ",
      err,
    });
  }
};

const deleteMenuItem = (req, res) => {
  req.menuitem.remove((err, deletedItem) => {
    if (err) {
      return res.status(400).json({
        error: `Error while deleting ${req.menuItem}`,
      });
    }
    res.json({
      message: `${deletedItem.name} deleted from menu successfully`,
    });
  });
};

module.exports = {
  createMenuItem,
  getAllMenu,
  getMenuItemById,
  getMenuItem,
  getMenuItemPhoto,
  getCategoryById,
  getAllCategories,
  getMenuItemCategory,
  updateMenuItem,
  deleteMenuItem,
};
