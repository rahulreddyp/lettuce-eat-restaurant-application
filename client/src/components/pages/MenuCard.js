import React, { useState, Fragment } from "react";
import { useNavigate, withRouter, Link } from "react-router-dom";
import { API } from "../../API";
import "../styles/Menu.css";
import { deleteMenuItem } from "../../apicalls/AdminCalls";

const MenuCard = ({ item, isAdmin }) => {
  const navigate = useNavigate();

  const [deleteItem, setDeleteItem] = useState(false);

  const redirectToItemDetails = () => {
    navigate("/admin/menu/update", { state: { itemId: item._id } });
  };

  
  var CardImage = item.photo ? item.photo : item.photo;
  // `${API}/menu/photo/${item._id}`

  const deleteCurrentMenuItem = (itemId) => {
    setDeleteItem(true);
    deleteMenuItem(itemId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.message);
        navigate("/admin/menu/manage", { state: { itemId } });
      }
    });
  };

  const deleteConfirmationMessage = () => {
    <div
      className="alert alert-prompt alert-dismissable fade show"
      role="alert"
    >
      Are you sure to delete the menu item ?
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>;
  };

  return (
    <div className="card shadow">
      <Fragment>{deleteItem ? deleteConfirmationMessage() : null}</Fragment>
      <div
        onClick={() => {
          redirectToItemDetails();
        }}
      >
        <div className="overflow">
          <img
            src={CardImage}
            alt="Menu Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
          />
          <div className="card-body">
            {/* {redirectToItemDetails()} */}
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.description}</p>
            <span className="text-white bg-success rounded p-2">
              $ {item.price}
            </span>
          </div>
        </div>
      </div>
      {isAdmin && (
        <div className="mb-2">
          <button
            onClick={() => {
              deleteCurrentMenuItem(item._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
