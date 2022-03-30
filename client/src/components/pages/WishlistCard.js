import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate, withRouter } from "react-router-dom";
import { deleteWishlistItem ,moveItemtoCart} from "../../apicalls/WishlistCalls";
import "../styles/Menu.css";
import { API } from "../../API";


const WishlistCard = ({ item }) => {
    //const [wishlistitem, setItem] = useState([]);
    //setItem = item
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [cartItem, setCartItem] = useState([]);
 
    const navigate = useNavigate();

    const redirectToItemDetails = () => {

        navigate("/menuitem", {state: {itemId: item._id}})
  
    };

    const CardImage = `${API}/menu/photo/${item._id}`;

  const removefromWishlist = async () => {
    const deletemessage = "";
      deleteWishlistItem(item._id).then((data)=>{
        if (data.error) {
          setError(data.error);
          deletemessage = data.error;
        } else {
          console.log(data);
          deletemessage = data.message;
          navigate("/wishlist", { state: { deletemessage } });
        }
      }) 
    };

  const moveToCart = async () => {
 
    item.quantity = 1;
    item.itemvalue= "small";
    console.log(item);
    const deletemessage = "";
    moveItemtoCart(item).then((data)=>{
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setError(data.message);
        navigate("/wishlist", { state: { deletemessage } });
        window.location.reload()
        
      }
    }) 
  // removefromWishlist();
  }
  return (

    <div class="card">
       <div className="overflow">
       <img
            src={CardImage}
            alt="Wishlist Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
            onClick={() => {
              redirectToItemDetails();
            }}
         />
      <div class="card-body">
        <h3 class="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price:  <span className="text-white bg-success rounded p-2">{item.price} </span></li>
        <span className="text-danger text-center">{error}</span>
        
      </ul>
      <div class="card-body">
        <a href="/wishlist" onClick={removefromWishlist} class="btn btn-outline-danger">Remove from Wishlist</a>
        &nbsp;&nbsp;
        <a href="#" onClick={moveToCart} class="btn btn-outline-success">Move to Cart</a>
      </div>
      </div>
    </div>
    // <div className="card shadow" >
    //   <div className="overflow">
    //       <img
    //         src={CardImage}
    //         alt="Wishlist Item"
    //         style={{ maxHeight: "100%", maxWidth: "100%" }}
    //         className="card-img-top mb-3 rounded"
    //       />
    //   <div className="card-body" >
    //       {/* {redirectToItemDetails()} */}        
    //       <h3 className="card-title">{item.name}</h3>
    //       <p className="card-description">{item.description}</p>
    //       <span className="text-white bg-success rounded p-2">{item.price} </span>
    //       &nbsp;
    //       <span className="text-danger text-center">{error}</span>
    //       <button onClick={removefromWishlist}  href="/wishlist" className="btn btn-outline-danger active">Remove</button>
    //       {/* <a href="#" onClick= {removefromWishlist} class="btn btn-danger" role="button">Remove</a> */}
    
    //     </div>
    //   </div>
    //   {/* <button onClick={removefromWishlist}  href="/wishlist" className="btn btn-outline-danger active btn-link">Remove</button> */}
      
    // </div>
  );
};

export default WishlistCard;
