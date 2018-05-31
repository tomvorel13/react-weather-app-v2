import React, { Component } from 'react';
import styled from 'styled-components';

//Component imports
import SearchBar from './components/SearchBar/SearchBar';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

const API_KEY = 'c5c58670c32db956ece142ae13d1759f';

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
        if (data.cod === '404') {
          this.setState({
            city: undefined,
            country: undefined,
            temp: undefined,
            desc: undefined,
            pressure: undefined,
            error: 'City not found'
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

    document.getElementById('myForm').reset();
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

    document.getElementById('myForm').reset();
  };

  render() {
    return (
      <Wrapper>
        <FlexContainer>
          <HeadingWrapper>
            <MainHeading>WeatherAPP 2.0</MainHeading>
            <LeadSentence>
              Find the latest weather conditions in your city
            </LeadSentence>
            <Instructions>
              1. Enter the city name <br />
              2. Enter the country acronym e.g. US <br />
              3. Click "Get weather"
            </Instructions>
          </HeadingWrapper>

          <SearchBar
            fetchWeather={this.fetchWeather}
            clearData={this.clearData}
          />
        </FlexContainer>

        <WeatherInfo
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          desc={this.state.desc}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </Wrapper>
    );
  }
}

export default App;

// STYLES

const Wrapper = styled.div`
  max-width: 880px;
  margin: 5em auto 0 auto;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  color: black;
  box-shadow: 6px 4px 20px 0px rgba(189, 189, 189, 1);

  @media screen and (max-width: 830px) {
    margin-top: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

const HeadingWrapper = styled.div`
  -webkit-clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  background-color: #21262b;
  width: 50%;
  padding: 1em 3em;
  color: white;

  @media screen and (max-width: 830px) {
    -webkit-clip-path: none;
    clip-path: none;
    width: 90%;
    padding: 2em 1em;
  }
`;

const MainHeading = styled.h1`
  font-size: 3em;
  font-weight: 300;
  margin-top: 0;

  @media screen and (max-width: 830px) {
    font-size: 2em;
    text-align: center;
  }
`;

const LeadSentence = styled.p`
  font-weight: 300;
  font-size: 1.2em;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;

const Instructions = styled.p`
  font-style: italic;
  font-weight: 300;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;