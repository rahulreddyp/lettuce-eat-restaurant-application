// Author: Rahul Reddy Puchakayala

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {

    const adminOperations = () => {
            return (
                <div className="card">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/admin/menu/add" className="nav-link">Add Menu Item</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/menu/manage" className="nav-link">Manage Menu</Link>
                        </li>                      
                    </ul>
                </div>
            )
    };

    return (        
        <div className="container p-4">
            <div className="jumbotron text-center">
            <h1>Hey, admin</h1>
            <p>Manage all your menu services here..</p>
          </div>
         <div className="row justify-content-center">
            <div className="col-md-6">
             {adminOperations()}
             </div>
         </div>
        </div>
     )
};

export default Admin;
