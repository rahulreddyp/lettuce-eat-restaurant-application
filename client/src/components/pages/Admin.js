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
                        <li className="list-group-item">
                            <Link to="/orders" className="nav-link">Manage Orders</Link>
                        </li>    
                    </ul>
                </div>
            )
    };


    const adminDashboard = () => {
        return(
            <div className="card mb-4">
                <ul className="list-group">
                    <li className="list-group-item border-0">
                        <p className="badge badge-success mr-2">Name:</p>
                    </li>
                    <li className="list-group-item border-0">
                        <p className="badge badge-success mr-2">Email:</p>
                    </li>
                </ul>
            </div>
        )
    }

    return (        
        <div className="container p-4">
            <div className="jumbotron text-center">
            <h1>Hey, admin</h1>
            <p>Manage all your services here..</p>
          </div>
         <div className="row">
             <div className="col-3">{adminOperations()}</div>
             <div className="col-9">{adminDashboard()}</div>
         </div>
        </div>
     )
};

export default Admin;
