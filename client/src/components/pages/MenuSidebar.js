// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import {FaSortAmountDownAlt} from "react-icons/fa";

const MenuSidebar = () => {

    const [state, setState] = useState({
        setOpen: false
    })

    const onSetSidebarOpen = (open) => {
        setState({ setOpen: open });
      };
 
     
    return (
        <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={state.setOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
         {/* <button onClick={() => }> 
            Open sidebar
         </button> */}

        <div
        onClick={() => onSetSidebarOpen(true)}> 
        Sort <FaSortAmountDownAlt/> 
        </div>   
      </Sidebar>
    );
}; 

export default MenuSidebar;
