import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { Modal, Button } from "react-bootstrap";
import "../styles/Menu.css";
import { deleteMenuItem } from "../../apicalls/AdminCalls";

const MenuCard = ({ item, isAdmin }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const redirectToItemDetails = () => {
    if(isAdmin) {
      navigate("/admin/menu/update", { state: { itemId: item._id } });
    } else {
      navigate("/menuitem", { state: { itemId: item._id } });
    }
  };

  var CardImage = item.photo ? item.photo : item.photo;
  // `${API}/menu/photo/${item._id}`

  const deleteCurrentMenuItem = (itemId) => {
    setShow(false);
    deleteMenuItem(itemId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.message);

        const deletemessage = data.message;
        navigate("/admin/menu/manage", { state: { deletemessage } });
      }
    });
  };

  // https://www.c-sharpcorner.com/article/how-to-create-boostrap-modal-in-reactjs/
  const menuModal = (itemId) => (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton> 
          <Modal.Title>Delete Menu Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to delete this item ?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {deleteCurrentMenuItem(itemId)}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  return (
    <div className="card shadow">
      {menuModal(item._id)}
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
            onClick={
               handleShow
              // () => { deleteCurrentMenuItem(item._id);}
            }
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
