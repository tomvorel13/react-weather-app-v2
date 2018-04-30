import React from "react";

//Styles
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="form-wrapper">
      <form id="myForm" onSubmit={props.fetchWeather}>
        <div className="input-wrapper">
          <span className="icon">
            <i className="far fa-building" />
          </span>
          <input
            className="field "
            name="city"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="input-wrapper">
          <span className="icon">
            <i className="fas fa-globe" />
          </span>
          <input
            className="field "
            name="country"
            type="text"
            placeholder="Country"
          />
        </div>

        <br />
        <button className="btn btn-effect">Get weather</button>
      </form>
      <button className="btn btn-effect" onClick={props.clearData}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
