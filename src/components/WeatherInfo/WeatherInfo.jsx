import React from "react";

//Styles
import "./WeatherInfo.css";

const WeatherInfo = props => {
  return (
    <div className="weather-wrapper">
      {props.city && (
        <p className="weather-par animated slideInRight">
          <span className="icon">
            <i className="far fa-building" />
          </span>{" "}
          {props.city}
        </p>
      )}
      {props.country && (
        <p className="weather-par animated slideInRight">
          <span className="icon">
            <i className="fas fa-globe" />
          </span>{" "}
          {props.country}
        </p>
      )}
      {props.temp && (
        <p className="weather-par animated slideInRight">
          <span className="icon">
            <i class="fas fa-thermometer-half" />
          </span>{" "}
          {Math.round(props.temp)} °C
        </p>
      )}
      {props.desc && (
        <p className="weather-par animated slideInRight">
          <span className="icon">
            <i class="fas fa-comment" />
          </span>{" "}
          {props.desc}
        </p>
      )}
      {props.pressure && (
        <p className="weather-par animated slideInRight">
          <span className="icon">
            <i class="fas fa-tachometer-alt" />
          </span>{" "}
          {props.pressure} hPa
        </p>
      )}
      {props.error && (
        <h2 className="weather-error animated slideInRight">
          <span className="icon">
            <i class="fas fa-exclamation-triangle" />
          </span>{" "}
          {props.error}
        </h2>
      )}
    </div>
  );
};

export default WeatherInfo;
