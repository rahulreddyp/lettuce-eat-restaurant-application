import React from "react";
import "../components/styles/homeScreen.css";


const Footer = () => {

  return (
    <footer className="footer mt-6">
      <div className="container-fluid text-center text-md-left">
        <button className="btn btn-md text-white" >Contact Us</button>
        <a href="/aboutus" className="btn btn-md-default text-white">About Us</a>
        <button className="btn btn-md text-white">Instagram</button>
      </div>
    </footer>
  );
};

export default Footer;
