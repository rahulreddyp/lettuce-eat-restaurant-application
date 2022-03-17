import React, { useState, useEffect } from "react";
import Base from "./Base";
import foodImage from "../resources/food_image.jpg";

const MenuItem = () => {
  return (
    <Base
      title="Menu Item Name"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" alt="Food Item" src={foodImage} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12"></div>
      </div>
    </Base>
  );
};

export default MenuItem;
