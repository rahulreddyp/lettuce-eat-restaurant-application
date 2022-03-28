// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect, Fragment } from "react";
import { createMenuItem, getAllCategories } from "../../apicalls/AdminCalls";
import customization_options from "../static/MenuCustomizations";

const MenuForm = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [customizations, setCustomizations] = useState(new Map());

  const [state, setState] = useState({
    name: "",
    description: "",
    category: "",
    dietary: "",
    customization: [],
    price: 0,
    photo: "",
    success: false,
    message: "",
    formData: "",
  });

  const { formData, success, message, customization } = state;

  const loadCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
        setState({ ...state, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = (e) => {
    setError("");
    const name = e.target.name;

    const userInput = name === "photo" ? e.target.files[0] : e.target.value;

    // switch case to handle each field validation
    if (userInput !== "") {
      switch (name) {
        case "name":
          if (!userInput.match(/^[a-zA-Z ]+$/)) {
            setError("Please enter valid item name - letters only");
          } else {
            formData.set(name, userInput);
            setState({ ...state, [name]: userInput });
          }
          break;

        case "description":
          if (!userInput.match(/^[-_,. a-zA-Z0-9]+$/)) {
            setError("Please enter  valid description - Alphanumeric and (underscore, hyphen) only");
          } else {
            formData.set(name, userInput);
            setState({ ...state, [name]: userInput });
          }
          break;
        case "category":
          if (userInput === "") {
            setError("Please choose a category for food item");
          } else {
            formData.set(name, userInput);
            setState({ ...state, [name]: userInput });
          }
          break;

        case "dietary":
          if (!userInput.match(/^[-_ a-zA-Z0-9]+$/)) {
            setError("Please enter  valid dietary instructions - letters and (underscore, hyphen) only");
          } else {
            formData.set(name, userInput);
            setState({ ...state, [name]: userInput });
          }
          break;

        case "price":
          // https://stackoverflow.com/questions/17482473/regular-expression-for-price-validation
          if (userInput < 1 || !userInput.match(/^\d{1,2}(\.\d{1,2})?$/)) {
            setError("Please enter valid amount (range: 1-99.99)");
          } else {
            formData.set(name, userInput);
            setState({ ...state, [name]: userInput });
          }
          break;

        default:
          formData.set(name, userInput);
          setState({ ...state, [name]: userInput });
      }
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      customization.push(e.target.name);
    } else {
      customization.remove(e.target.name);
    }

    setCustomizations(new Map(customizations.set(e.target.name, isChecked)));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (customization) {
      var filteredArray = [];

      var array = {};

      customization.forEach((e) => {
        filteredArray = customization_options.filter(
          (options) => options.name == e
        );
        array[e] = filteredArray[0].values;
      });

      console.log("options", filteredArray);
      console.log("array", array);

      if (customization.length !== 0) {
        formData.set("customization", array);
      }
    }

    // check if user customizations are selected
    // if(customizations) {
    //   const setCustomizationValues = (cb) => {
    //     var selectedOptions = [];
    //       for (const [key, value] of customizations.entries()) {
    //         if(value === true) {
    //             selectedOptions.push(key);
    //         }
    //       }
    //       cb(selectedOptions);
    //     }

    //   setCustomizationValues((data) => {
    //     formData.set('customization', data);
    //   });
    // }

    // check if all the form fields are filled or not
    if(error) {
      setError(error);
    }
    else if (
      !state.name ||
      !state.description ||
      !state.category ||
      !state.dietary ||
      !state.customization ||
      !state.price
    ) {
      setError("Please enter all the field values!");
    } else if (!state.photo) {
      setError("Food Item image is required!");
    } else if (!state.photo.name.match(/\.(jpg|jpeg|png)$/)) {
      setError("Choose valid image. only accepted - (jpg/jpeg/png)");
    } else if (!error) {
      createMenuItem(formData)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setState({
              ...state,
              name: "",
              description: "",
              category: "",
              dietary: "",
              customization: "",
              price: 0,
              photo: "",
              success: true,
              message: data.message,
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
      <h2 className="text-center mt-3">What's Cooking ?</h2>
      <div className="row">
        <Fragment>{success ? successMessage() : null}</Fragment>
        <span className="text-danger">{error}</span>
        <div className="col-md-6 text-left p-3"></div>
        <div className="col-md-6 text-left p-3">
          <form encType="multipart/form-data">
            <div className="form-group mb-3">
              <label className="fw-bold">
                Item Name:
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter menu item name"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Item Description:
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Enter item description"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">Category:</label>
              <select
                className="form-control"
                name="category"
                onChange={handleChange}
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
              <label className="fw-bold">
                Dietary Instructions:
                <input
                  className="form-control"
                  type="text"
                  name="dietary"
                  placeholder="enter dietary information"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Customization:
                {customization_options.map((option, index) => (
                  <label key={index} htmlFor={option.name}>
                    <input
                      type="checkbox"
                      name={option.name}
                      checked={customizations.get(option.name)}
                      onChange={handleCheckboxChange}
                    />{" "}
                    {option.name}
                  </label>
                ))}
              </label>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Price:
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  placeholder="Enter item price"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group mb-3">
              <label className="fw-bold">
                Item Image:
                <input                  
                  type="file"
                  name="photo"
                  accept="image"
                  placeholder="Choose an image"
                  onChange={handleChange}
                />
              </label>
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuForm;
