const Wishlist = require("../Models/wishlist.models");

const getAllWishlist = (req,res) => {
    Wishlist.find((err, wishlistitems) => {
        if (err) {
          return res.status(400).json({error: err});
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

const putWishlistItem = (req,res)=>{
    console.log(req.body.name)
    Wishlist.findOne({name: req.body.name})
    .then(results => {
        const wish = new Wishlist(req.body)
        if (!results) {
            wish.save();
            return res.status(200).json({success: true});
        } 
        else{
            return res.status(400).json({success:false,error: "Item already in Wishlist",})
        }
    })
   
 }

 const deleteWishlistItem = (req, res) => {
    console.log("the item to be removed is"+req.body.id)
    Wishlist.remove({id:req.body.id})

  };

module.exports = {
    getAllWishlist,
    getWishlistItem,
    getWishlistItemById,
    putWishlistItem,
    deleteWishlistItem
  };
