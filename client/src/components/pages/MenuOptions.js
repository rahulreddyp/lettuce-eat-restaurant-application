import React from "react";

const MenuOptions = ({ index, customizations, options, onChange }) => {


  return (
    <div className="radio" key={index}>
      <ul className="list-group" key={index}>
        {Array.isArray(customizations[options]) ? (
          customizations[options].map((option, ind) => {
            return (
              <li className="list-group-item border-0" key={ind}>
                <span>
                  <label key={ind}>
                    <input
                      type="radio"
                      value={option}
                      name={options}
                      onChange={onChange}
                    />{" "}
                    {option}
                  </label>
                </span>
              </li>
            );
          })
        ) : (
          <p>No Customizations Available</p>
        )}
      </ul>
    </div>
  );
};

export default MenuOptions;
