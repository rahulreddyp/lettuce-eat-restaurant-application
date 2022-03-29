const Wishlist = require("../Models/wishlist.models");
const Cart = require("../Models/cart.models");

const getAllWishlist = (req,res) => {
    Wishlist.find((err, wishlistitems) => {
        if (err) {
          return res.status(400).json({error: err});
        }
        return res.status(200).json(wishlistitems);
      });
}

const getWishlistItemById = (req, res, next, id) => {
    Wishlist.findById(id).exec((err, item) =>{
        if(err || !item){
            return res.status(400).json({
                error: "Item not found in DB"
            })
         
        }

        req.wishlistitem = item;
        next();
    });
};

const moveToCart = (req, res)=>{
    Cart.findOne({name: req.body.name})
    .then(results => {
        const cart = new Cart(req.body)
        if (!results) {
            cart.save();
            return res.status(200).json({success: true});
        } 
        else{
            return res.status(400).json({success:false,error: "Item already in Cart",})
        }
    })
}

const getWishlistItem = (req, res) => {
    return res.json(req.menuitem);
};

const putWishlistItem = (req,res)=>{
    console.log(req.body.name)
    Wishlist.findOne({id: req.body.id})
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

    console.log("the item to be removed is"+req.wishlistitem)
    
    const userID = req.wishlistitem._id;
    console.log(userID)
    Wishlist.findByIdAndDelete(userID,(err,result) => {
        if(err){
            console.log(err)
            res.status(400).json({success:false, error:err});
        }else if(!result){
            return res.status(204).json({success:false, error:"some error"});
        }else{
            return res.status(200).json({success:true});
        }
    })

  };

module.exports = {
    getAllWishlist,
    getWishlistItem,
    getWishlistItemById,
    putWishlistItem,
    deleteWishlistItem,
    moveToCart
  };
