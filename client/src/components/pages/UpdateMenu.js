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


  const {name, description, category, dietary, customization, price, success, message, formData} = item;

  const loadItemDetails = (itemId) => {
    getMenuItem(itemId).then(data => {
        
        if(data.error){
            setError(data.error);
        }
        else{
            setItem({
                ...item,
                name: data.name,
                description: data.description,
                category: data.category,
                dietary: data.dietary,
                customization: data.customization,
                price: data.price,
                formData: new FormData()                    
            });
            loadCategories();            
        }
    })
};

  const loadCategories = () => {
    getAllCategories().then(data => {
        
        if(data.error){
            setError(data.error);
        }
        else{
            setCategories(data);
            // setItem({...item, 
            //   formData: new FormData()
            // });            
        }
    })  
};
  
  useEffect(() => {
    loadItemDetails(itemId);
}, [itemId]);

  const handleChange = (e) => {
    const value = e.target.name == "photo" ? e.target.files[0] : e.target.value
    const name = e.target.name;  
    
    formData.set(name, value);
    setItem({
        ...item,
        [e.target.name]: value,
      })
  };

  const onSubmit = (e) => {
    e.preventDefault();
        
       // check if all the form fields are filled or not
       if (!item) {
        setError("Please enter all the field values!" );
      } else if(!error) {

        updateMenutem(itemId, formData)
        .then(data => {
            if(data.error){
                setError(data.error)
            }else{
                console.log('after update');

                setItem({...item, 
                    name: "",
                    description: "",
                    category: "",
                    dietary: "",
                    customization: "",
                    price: 0,
                    photo: "",
                    success: true,
                message: "Menu Item updated successfully!"})
            }
        })
        .catch(err => {console.log(err)})
  }
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
                  value={name}
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
                  value={item.description}
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
                value={item.category}
                onChange={handleChange}
              >
                <option>Select Category</option>              
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
                  value={item.dietary}
                  onChange={handleChange}
                  readOnly
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
                  value={item.customization}
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
                  value={item.price}
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
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;
