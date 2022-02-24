import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Base from "./Base";

const Home = () => {
  return (
    <Base
      title="Food Ordering Application"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ></Base>
  )
}

export default Home;