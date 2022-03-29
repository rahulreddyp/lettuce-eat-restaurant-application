// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { updateMenutem, getAllCategories } from "../../apicalls/AdminCalls";
import { getMenuItem } from "../../apicalls/MenuCalls";

const UpdateMenu = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  const { state } = useLocation();
  const { itemId } = state || {};

  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    dietary: "",
    customization: "",
    price: 0,
    photo: "",
    success: false,
    message: "",
    formData: "",
  });

  const {   
    success,
    message,
    formData,
  } = item;

  useEffect(() => {
    loadItemDetails(itemId);
  }, []);

  const loadItemDetails = (itemId) => {
    loadCategories();

    getMenuItem(itemId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setItem(prev => ({
          ...prev,
          name: data.name,
          description: data.description,
          category: data.category,
          dietary: data.dietary,
          customization: data.customization,
          price: data.price,
          formData: new FormData(),
        }));
      }
    });
  };

  const loadCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
        setItem({...item, formData: new FormData()});
      }
    });
  };

  const handleChange = (e) => {
    setError("");
    const name = e.target.name;
    const userInput = name === "photo" ? e.target.files[0] : e.target.value;
    
    if(userInput !== "") {
    // switch case to handle each field validation
    switch (name) {
      case "name":
        if (!userInput.match(/^[-_a-zA-Z ]+$/)) {
          setError("Please enter valid item name - letters only");
        } else {
          formData.set(name, userInput);
          setItem({ ...item, [name]: userInput });
        }
        break;

      case "description":
        if (!userInput.match(/^[-_,. a-zA-Z0-9]+$/)) {
          setError("Please enter  valid description - Alphanumeric only");
        } else {
          formData.set(name, userInput);
          setItem({ ...item, [name]: userInput });
        }
        break;
      case "category":
        if (userInput === "") {
          setError("Please choose a category for food item");
        } else {
          formData.set(name, userInput);
          setItem({ ...item, [name]: userInput });
        }
        break;
    
      case "price":
        // https://stackoverflow.com/questions/17482473/regular-expression-for-price-validation
        if (userInput < 1 || !userInput.match(/^\d{1,2}(\.\d{1,2})?$/)) {
          setError("Please enter valid amount (range: 1-99.99)");
        } else {
          formData.set(name, userInput);
          setItem({ ...item, [name]: userInput });
        }
        break;

      default:
        formData.set(name, userInput);
        setItem({ ...item, [name]: userInput }); 
    }  
  }
  setItem({ ...item, [name]: userInput });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    // check if all the form fields are filled or not
    if (
      !item.name ||
      !item.description ||
      !item.category ||
      !item.price
    ) {
      setError("Please enter all the field values!");
      
    } 
    else if (!error) {
      updateMenutem(itemId, formData)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
      
            setItem({
              ...item,
              name: "",
              description: "",
              category: "",
              dietary: "",
              customization: "",
              price: 0,
              photo: "",
              success: true,
              message: "Menu Item updated successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const successMessage = () => (
    <div className="alert alert-info alert-dismissable fade show" role="alert">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );


  return (
    <div className="container">
      <h2 className="text-center mt-3">Something to update ?</h2>
      <div className="row justify-content-center">
        <Fragment>{success ? successMessage() : null}</Fragment>
        <span className="text-danger">{error}</span>
        <div className="col-md-5 text-left m-3 p-3 border rounded">
          <form encType="multipart/form-data">
            <div className="form-group mb-3">
              <label className="fw-bold">Item Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter menu item name"
                  value={item.name}
                  onChange={handleChange}
                />

            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Item Description:              </label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Enter item description"
                  value={item.description}
                  onChange={handleChange}
                />

            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">Category:</label>
              <select
                className="form-control"
                name="category"
                value={item.category}
                onChange={handleChange}
              >
                <option>Select Category</option>
                {categories &&
                  categories.map((cat, index) => (
                    <option key={index} value={cat._id}>
                      {cat.category_name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Dietary Instructions:</label>
                <input
                  className="form-control"
                  type="text"
                  name="dietary"
                  title="disabled to edit"
                  placeholder="enter dietary information"
                  value={item.dietary}
                  onChange={handleChange}
                  readOnly
                />
              
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">Price:</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  placeholder="Enter item price"
                  value={item.price}
                  onChange={handleChange}
                />

            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Item Image:
                <input
                  className="form-control"
                  type="file"
                  name="photo"
                  accept="image"
                  onChange={handleChange}
                />
              </label>
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;
