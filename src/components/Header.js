import React from "react";
import { Link, withRouter } from "react-router-dom";
import food_logo from "../resources/food_logo.png";

const Header = ({ props }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="collapse navbar-collapse show ms-sm-4">
        {/* <Link className="navbar-brand ml-5" to="/">
          <img src={food_logo} alt="Logo" width="40px" />
        </Link> */}

        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search Menu.."
            aria-label="Search"
          />
        </form>
        <div className="ms-auto">
          <h2 className="text-white">Lettuce Eat</h2>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/account">
              My Account
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-warning" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
