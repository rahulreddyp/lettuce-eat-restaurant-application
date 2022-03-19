const Menu = require("../Models/menu.models");

const getAllMenu = (req,res) => {
    // return res.json(JSON.stringify( {
    //     "name":"coke",
    //     "price": 2.99,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":0,
    //     "sizes":["small","large"]
    // },
    // {
    //     "name":"pepsi",
    //     "price": 2.59,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":0,
    //     "sizes":["small","large"]
    // },
    // {
    //     "name":"Chicken Biryani",
    //     "price": 11.89,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":1,
    //     "sizes":["small","large"]
    // },
    // {
    //     "name":"hamburger",
    //     "qty": 12.0,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":1,
    //     "sizes":["small","large"]
    // },
    // {
    //     "name":"fries",
    //     "qty": 3.99,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":1,
    //     "sizes":["small","large"]
    // },
    // {
    //     "name":"Cheese Pizza",
    //     "qty": 13.99,
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "category":2,
    //     "sizes":["small","large"]
    // }));

    Menu.find().exec((err, menuitems) => {
        if (err) {
          return res.status(400).json({
            error: "Menu not found"
          });
        }
        return res.status(200).json(menuitems);
      });
}

const getMenuItemById = (req, res, next, id) => {
    Menu.findById(id).exec((err, item) =>{
        if(err || !item){
            return res.status(400).json({
                error: "Item not found in DB"
            })
         
        }

        req.menuitem = item;
        next();
    });
};

const getMenuItem = (req, res) => {
    return res.json(req.menuitem);
}


module.exports = {
    getAllMenu,
    getMenuItemById,
    getMenuItem,
  };
