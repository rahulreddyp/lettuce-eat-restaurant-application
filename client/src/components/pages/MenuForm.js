import React, { useState, useEffect, Fragment } from "react";
import { createMenuItem, getAllCategories } from "../../apicalls/AdminCalls";

const MenuForm = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  const [state, setState] = useState({
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

  const {formData, success, message} = state;

  const loadCategories = () => {
    getAllCategories().then(data => {
        
        if(data.error){
            setError(data.error);
        }
        else{
            setCategories(data);
            setState({...state, 
              formData: new FormData()
            });            
        }
    })
    
};
  
  useEffect(() => {
    loadCategories();
}, []);

  const handleChange = (e) => {
    const value = e.target.name == "photo" ? e.target.files[0] : e.target.value
    const name = e.target.name;  
    
    formData.set(name, value);
    setState({
        ...state,
        [e.target.name]: value,
      })
  };

  const onSubmit = (e) => {
    e.preventDefault();
        
       // check if all the form fields are filled or not
       if (!state) {
        setError("Please enter all the field values!" );
      } else if(!error) {

        createMenuItem(formData)
        .then(data => {
            if(data.error){
                setError(data.error)
            }else{              
                setState({...state, 
                    item_name: "",
                    item_description: "",
                    category: "",
                    dietary: "",
                    customization: "",
                    price: 0,
                    photo: "",
                    success: true,
                message: data.message})
            }
        })
        .catch(err => {console.log(err)})
  }
};

  const selectStyle = {
    dropdownIndicator: { backgroundColor: "blue" },
  };

  const successMessage = () => (
    <div className="alert alert-info alert-dismissable fade show" role="alert">     
       {message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
    </div>
);

  return (
    <div className="container">
      <h2 className="text-center mt-3">What's Cooking ?</h2>
      <div className="row">
        <Fragment>
          {success ? successMessage(): null }
        </Fragment>
        <span className="text-danger">{error}</span>
        <div className="col-md-6 text-left p-3"></div>
        <div className="col-md-6 text-left p-3">
          <form encType='multipart/form-data'>
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
                // styles={selectStyle}
                onChange={handleChange}
              >
                <option>Select Category</option>
                {/* <option value="0">Vegetarian</option>
                <option value="1">Non-Vegetarian</option>
                <option value="2">Fast Food</option>
                <option value="3">Vegan</option>
                <option value="4">Seafood</option> */}
                {categories && 
              categories.map((cat, index) => (
                <option key={index} value={cat._id}>{cat.category_name}</option>
              ))
              }
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
                <input
                  className="form-control"
                  type="text"
                  name="customization"
                  placeholder="Enter customizations"
                  onChange={handleChange}
                />
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
                  className="form-control"
                  type="file"
                  name="photo"
                  accept="image"
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
