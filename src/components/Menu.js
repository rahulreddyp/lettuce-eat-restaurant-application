import React, { useState, useEffect } from "react";
import Base from "./Base";
import foodImage from "../resources/food_image.jpg";

const Menu = () => {
  return (
    <Base
      title="Menu"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      <div className="container mb-5">
        <div className="row">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div className="col-4 mb-4">
              <div className="card border border-info">
                <div className="rounded border p-2">
                  <img
                    className="card-img-top"
                    alt="Food Item"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    src={foodImage}
                  />
                </div>
                <div className="card-header lead">Menu Item</div>

                <div className="card-body">
                  <p className="card-text text-wrap">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-white bg-success rounded p-2">$ 12.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default Menu;
