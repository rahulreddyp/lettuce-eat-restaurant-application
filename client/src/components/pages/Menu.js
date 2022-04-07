// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";
import MenuSidebar from "./MenuSidebar";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const { state } = useLocation();
  var { specification } = state || {};

  const loadMenu = () => {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }

    const userSpecification = specification ? specification : "";

    // userSpecification =  (userSpecification && userSpecification.filter) ? {[userSpecification.filter.key] : userSpecification.filter.value} : "";

    getMenu(userSpecification).then((data) => {

      console.log(data);
      if (data.error) {
        setError(data.error);
        console.log(data.error);
      } else {
        setMenuItems(data);
      }
    });
  };

  useEffect(() => {
    loadMenu();

    // const interval=setInterval(() => {
    //   loadMenu();
    //  },20000)
                
    //  return() => clearInterval(interval);
  }, [reload]);

  return (
    <div style={{backgroundColor: "#e7e393"}}>
    <div className="container d-flex justify-content-center" >
      <div className="row">
        <div className="col-12">
        <span className="text-danger text-center">{error}</span>
          <div className="jumbotron text-center">
            <h1>WHAT'S ON OUR MENU ?</h1>
            <p>Best food, best served</p>
          </div>
        </div>
        <div>{<MenuSidebar setReload={setReload} reload={reload} /> } </div>       
        <div>
        {/* <button className="btn btn-default" onClick={() => setSidebarVisible(true)}>
            Sort <FaSortAmountDownAlt />
        </button> */}
        </div>              
        {/* <button onClick={() => this.onSetSidebarOpen(true)}>

        </button> */}
        {(menuItems.length !==0) ? 
        (menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={false} title="Click to view item details" />
            </div>
          );
        })):

        (<h3 className="alert alert-warning"> No menu items found, We will update the menu soon </h3>)
        }
      </div>
    </div>
    </div>
  );
};

export default Menu;
