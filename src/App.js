import React, { Component } from "react";
import "./App.css";

//Component imports
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const API_KEY = "c5c58670c32db956ece142ae13d1759f";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    desc: undefined,
    pressure: undefined,
    error: undefined
  };

  fetchWeather = async e => {
    e.preventDefault();

    let country = e.target.elements.country.value;
    let city = e.target.elements.city.value;

    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city},${country}&units=metric`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.cod === "404") {
          this.setState({
            city: undefined,
            country: undefined,
            temp: undefined,
            desc: undefined,
            pressure: undefined,
            error: "City not found"
          });
        } else {
          this.setState({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            desc: data.weather[0].description,
            pressure: data.main.pressure,
            error: undefined
          });
        }
      });

    document.getElementById("myForm").reset();
  };

  clearData = e => {
    this.setState({
      city: undefined,
      country: undefined,
      temp: undefined,
      desc: undefined,
      pressure: undefined,
      error: undefined
    });

    document.getElementById("myForm").reset();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="flex-container">
          <div className="heading-wrapper">
            <h1>WeatherAPP 2.0</h1>
            <p className="lead-sentence">
              Find the latest weather conditions in your city
            </p>
            <p className="instructions">
              1. Enter the city name <br/>
              2. Enter the country acronym e.g. US <br/>
              3. Click "Get weather"
            </p>
          </div>

          <SearchBar
            fetchWeather={this.fetchWeather}
            clearData={this.clearData}
          />
        </div>

        <WeatherInfo
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          desc={this.state.desc}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
