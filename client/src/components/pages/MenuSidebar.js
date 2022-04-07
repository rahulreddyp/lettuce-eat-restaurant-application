// Author: Rahul Reddy Puchakayala

// Reference: 
// https://www.npmjs.com/package/react-sidebar
// https://stackoverflow.com/questions/57348509/need-to-render-a-sidebar-component-onclick-from-another-component

import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { getAllCategories } from "../../apicalls/AdminCalls";
import { useNavigate } from "react-router-dom";
import {RangeSlider} from '@adobe/react-spectrum';

const MenuSidebar = ({
  setReload = function (r) {
    return r;
  },
  reload = undefined, specType
}) => {
  const [state, setState] = useState({
    specType: "",
    setOpen: true,
    selectedOption: "",
    sortBy: "",
    sortOption: "",
  });

  const [filter, setFilter] = useState({
    key: "",
    value: "",
  });

  const [priceRange, setpriceRange] = React.useState({start: 1, end: 20});
  
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSetSidebarOpen = (open) => {
    setState({ ...state, setOpen: open });
  };

  const loadCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!state.sortOption || !state.sortBy) {
      setError("Please choose an option to sort menu items!");
    } else {
      const sortByAscDesc = state.sortBy === "+" ? "" : state.sortBy;

      const sortValue = sortByAscDesc + state.sortOption;
      console.log(sortValue);
      setReload(!reload);

      navigate("/menu", { state: { specification: { sort: sortValue } } });
    }
  };

  const handleFilterSubmit = (e) => { 
    e.preventDefault();

    setError("");

    if (!filter.key || !filter.value) {
      setError("Please choose an option to sort menu items!");
    } else {
      console.log(state.filter);
      setReload(!reload);
      navigate("/menu", { state: { specification: { [filter.key]: filter.value } } });
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    
    setState({
      ...state,
      [name]: e.target.value,
      selectedOption: e.target.value,
    });
  };

  const handleFilterChange = (e) => {
    const name = e.target.name;
    setFilter({...filter, key: name, value: e.target.value});
  }

  const handleClear = () => {

    setReload(!reload);
    navigate("/menu", { state: { specification: {} } });
    
    setState({ ...state, selectedOption: "", sortBy: "", sortOption: "" });

    setFilter({...filter, key: "", value: ""});

  };

  const sortContent = () => {
    return (
      <div className="container-fluid m-auto bg-dark text-white">
        <h2>Sort</h2>
        <span className="text-danger text-center">{error}</span>
        <form>
          <div className="btn btn-default text-white" onClick={() => handleClear()}>
            <u>clear</u>
          </div>
          <div className="form-group mb-3">
            <label className="fw-bold">Choose sort option:</label>
            <select
              className="form-control"
              name="sortOption"
              onChange={handleChange}
            >
              <option value="">Select options</option>
              <option value="price">Price</option>
              <option value="dietary">Dietary</option>
            </select>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="+"
                name="sortBy"
                checked={state.selectedOption === "+"}
                onChange={handleChange}
              />{" "}
              Low to High
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="-"
                name="sortBy"
                checked={state.selectedOption === "-"}
                onChange={handleChange}
              />{" "}
              High to Low
            </label>
          </div>
          <button
            className="btn btn-default fw-bold text-white"
            type="submit"
            onClick={handleSubmit}
          >

            Apply
          </button>
        </form>
      </div>
    );
  };

  const filterContent = () => {
    {(categories.length === 0) && loadCategories()}
    return (
      <div className="container-fluid m-auto bg-dark text-white">
        <h2>Filter</h2>
        <span className="text-danger text-center">{error}</span>
        <form>
          <div className="btn btn-default text-white" onClick={() => handleClear()}>
            <u>clear</u>
          </div>
          <div className="form-group mb-3">
            <label className="fw-bold">Choose Category:</label>
            <select
                className="form-control"
                name="category"
                onChange={handleFilterChange}
              >
                <option value="">Select Category</option>
                {categories &&
                  categories.map((cat, index) => (
                    <option key={index} value={cat._id}>
                      {cat.category_name}
                    </option>
                  ))}
              </select>
          </div>
          <div className="form-group mb-3">
          <div className="slider">
            <div className="slider__track" />
            <div className="slider__range" />
          </div>
          <label className="fw-bold">Choose Price Range:</label>               

            {/* Reference: https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html */}
            <RangeSlider
              label="Price Range"              
              minValue={2.0}
              maxValue={20.0}
              step={0.01}
              formatOptions={{style: 'currency', currency: 'CAD'}}
              marginTop={2}
              value={priceRange}
              onChange={setpriceRange}/>
            </div>

          <button
            className="btn btn-default fw-bold text-white"
            type="submit"
            onClick={handleFilterSubmit}
          >
            Apply
          </button>
        </form>
      </div>
    );
  };

  return (
    <Sidebar
      sidebar= 
      {specType === "sort" ? sortContent() : filterContent()}
      open={state.setOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {
          width: "30%",
          background: "white",
          align: "center",
          overflowY: "auto",
        },
      }}
    >
      
     <></>
    </Sidebar>
  );
};

export default MenuSidebar;
