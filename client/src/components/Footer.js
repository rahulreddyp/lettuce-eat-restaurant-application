import React from "react";
import "../components/styles/homeScreen.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid text-center text-md-left">
        <button className="btn btn-md text-white" >Contact Us</button>
        <button className="btn btn-md text-white">About Us</button>
        <button className="btn btn-md text-white">Instagram</button>
      </div>
    </footer>
  );
};

export default Footer;
