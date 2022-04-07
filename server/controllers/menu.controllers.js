// Author: Rahul Reddy Puchakayala, Aadil Sadik Mohammad

const Menu = require("../models/menu.models");
const formidable = require("formidable");
const fs = require("fs");
const Category = require("../models/categories.models");
const _ = require("lodash");
const AWSConfig = require("../config/aws.config");

const uploadFile = (fileContent, fileName) => {
  const { s3, params } = AWSConfig;

  // Setting up S3 upload parameters
  const params1 = {
    Bucket: params.Bucket,
    Key: fileName,
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params1, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);

    return data.Location;
  });
};

const createMenuItem = (req, res) => {
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

      const menuItem = new Menu(fields);

      if (fields.customization) {
        const userCustomizations = JSON.parse(fields.customization);

        menuItem.customization = userCustomizations;
      }
  
      if (file.photo) {
        if (file.photo.size > 5000000) {
          return res.status(400).json({
            error: "File size is big, Max: 5 MB",
          });
        }

        const fileContent = fs.readFileSync(file.photo.filepath);

        const data = uploadFile(fileContent, file.photo.originalFilename);
        menuItem.photo.data = file.photo.originalFilename.toString();
    
        // menuItem.photo.data = fs.readFileSync(file.photo.filepath);
        // menuItem.photo.contentType = file.photo.mimetype;
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


const getImageObject = (req, res) => {
   AWSConfig.s3.getObject(
    {
      Bucket: AWSConfig.params.Bucket,
      Key: req.menuitem.photo.data,
    },
    function (errtxt, file) {
      if (errtxt) {
        console.Log("lireFic", "ERR " + errtxt);
        return res.json({error: errtxt});
      } else {
        res.send(file.Body);

      }
    }
  );
};

const getAllMenu = (req, res) => {  

  var sortQuery = req.query.sort ? req.query.sort : "_id";

  var itemsLimit = req.query.limit ? parseInt(req.query.limit) : 6;
  // var filter = {key: 'price', value: {$gte: 1.99, $lte: 7.99}};  

  const filterOptions = req.query.category ? {"category": req.query.category} : {};
  // {'price': {$gte: 1.99, $lte: 7.99}};

  Menu.find(filterOptions)
    .populate("category")
    .sort(sortQuery)
    .limit(itemsLimit)
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
        error: "Item not found in DB", err
      });
    }
    req.menuitem = item;
    next();
  });
};

const getMenuItem = (req, res) => {
  return res.json(req.menuitem);
};

// Photo Middleware
const getMenuItemPhoto = (req, res, next) => {
  if (req.menuitem) {
    res.set("Content-Type", req.menuitem.photo.contentType);
    return res.send(req.menuitem.photo.data);
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

      let menuitem = req.menuitem;
      menuitem = _.extend(menuitem, fields);

      if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: "File size is big, Max: 3 MB",
          });
        }

        // menuitem.photo.data = fs.readFileSync(file.photo.filepath);
        // menuitem.photo.contentType = file.photo.mimetype;
        const data = uploadFile(fileContent, file.photo.originalFilename);
        menuitem.photo.data = file.photo.originalFilename.toString();
      }

      menuitem.save((err, item) => {
        if (err) {
          res.status(400).json({
            error: "Error occurred when updating Item to database!" + err,
          });
        }
        res
          .status(200)
          .json({ message: "Menu Item updated successfully!", item });

        // res.writeHead(200, {'content-type' : 'application/json'})
        // res.end(item, null, 2);
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
  getImageObject
};
