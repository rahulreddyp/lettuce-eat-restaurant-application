import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Base = ({
  title = "",
  description = "",
  className = "p-3",
  children,
}) => {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="jumbotron text-center">
          <h2 className="display-5">{title}</h2>
          <p>{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Base;
