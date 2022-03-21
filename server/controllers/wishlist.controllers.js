const Wishlist = require("../Models/wishlist.models");

const getAllWishlist = (req,res) => {
    
    Wishlist.find().exec((err, wishlistitems) => {
        if (err) {
          return res.status(400).json({
            error: "Wishlist not found"
          });
        }
        return res.status(200).json(wishlistitems);
      });
}

const getWishlistItemById = (req, res, next, id) => {
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

const getWishlistItem = (req, res) => {
    return res.json(req.menuitem);
};

const putWishlistItem = async(req,res)=>{

    try {
        const item = await Wishlist.create({
            id: req.body.id,
            name:req.body.name,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price,
            photo: req.body.photo
        });
        res.status(200).json({success: true});
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, error:error.message});
    }
};


module.exports = {
    getAllWishlist,
    getWishlistItem,
    getWishlistItemById,
    putWishlistItem
  };
