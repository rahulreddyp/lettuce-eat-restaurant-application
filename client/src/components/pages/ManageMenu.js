import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";

const ManageMenu = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [itemLength, setItemLength] = useState(0);

  const { state } = useLocation();
  const { deletemessage } = state || {};

  const loadMenu = () => {   
    getMenu().then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        setMenuItems(data);  
        
        // if(deletemessage) {
        //     // update menu after every change to the menu
        //     setItemLength(itemLength + 1);
        //   }
      }
    });
  };  

  useEffect(() => {
    loadMenu();    
    
    const interval=setInterval(() => {
        loadMenu();
       },10000)
                  
       return() => clearInterval(interval);
  }, []);

  const deleteMessage = () => (
    <div className="alert alert-info alert-dismissable fade show" role="alert">
      {deletemessage}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );


  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>MANAGE YOUR MENU</h1>
            <Fragment>{deletemessage ? deleteMessage() : null}</Fragment>
          </div>
        </div>
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageMenu;
