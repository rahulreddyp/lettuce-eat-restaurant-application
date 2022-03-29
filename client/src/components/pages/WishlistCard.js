import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate, withRouter } from "react-router-dom";
import { deleteWishlistItem } from "../../apicalls/WishlistCalls";
import "../styles/Menu.css";

const WishlistCard = ({ item }) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const redirectToItemDetails = () => {

        navigate("/menuitem", {state: {itemId: item.id}})
  
    };

    const CardImage = item.photo ? item.photo : "No Image";

  const removefromWishlist = async () => {
    const deletemessage = "";
    console.log("Here"+ item.id)
      deleteWishlistItem(item.id).then((data)=>{
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
  return (
    <div className="card shadow" >
      <div className="overflow">
          <img
            src={CardImage}
            alt="Wishlist Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
          />
      <div className="card-body" >
          {/* {redirectToItemDetails()} */}        
          <h3 className="card-title">{item.name}</h3>
          <p className="card-description">{item.description}</p>
          <span className="text-white bg-success rounded p-2">{item.price} </span>
          &nbsp;
          <span className="text-danger text-center">{error}</span>
          <button onClick={removefromWishlist}  href="/wishlist" className="btn btn-outline-danger active">Remove</button>
          {/* <a href="#" onClick= {removefromWishlist} class="btn btn-danger" role="button">Remove</a> */}
    
        </div>
      </div>
      {/* <button onClick={removefromWishlist}  href="/wishlist" className="btn btn-outline-danger active btn-link">Remove</button> */}
      
    </div>
  );
};

export default WishlistCard;
