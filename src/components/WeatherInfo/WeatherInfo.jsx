import React from 'react';
import styled from 'styled-components';

const WeatherInfo = props => {
  return (
    <WeatherWrapper>
      {props.city && (
        <WeatherInfoText className="animated slideInRight">
          <Icon>
            <i className="far fa-building" />
          </Icon>{' '}
          {props.city}
        </WeatherInfoText>
      )}
      {props.country && (
        <WeatherInfoText className="animated slideInRight">
          <Icon>
            <i className="fas fa-globe" />
          </Icon>{' '}
          {props.country}
        </WeatherInfoText>
      )}
      {props.temp && (
        <WeatherInfoText className="animated slideInRight">
          <Icon>
            <i className="fas fa-thermometer-half" />
          </Icon>{' '}
          {Math.round(props.temp)} °C
        </WeatherInfoText>
      )}
      {props.desc && (
        <WeatherInfoText className="animated slideInRight">
          <Icon>
            <i className="fas fa-comment" />
          </Icon>{' '}
          {props.desc}
        </WeatherInfoText>
      )}
      {props.pressure && (
        <WeatherInfoText className="animated slideInRight">
          <Icon>
            <i className="fas fa-tachometer-alt" />
          </Icon>{' '}
          {props.pressure} hPa
        </WeatherInfoText>
      )}
      {props.error && (
        <WeatherError className="animated slideInRight">
          <Icon>
            <i className="fas fa-exclamation-triangle" />
          </Icon>{' '}
          {props.error}
        </WeatherError>
      )}
    </WeatherWrapper>
  );
};

export default WeatherInfo;

// STYLES

const WeatherWrapper = styled.div`
  padding: 0 3em;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 830px) {
    margin-left: 1em;
  }
`;

const WeatherInfoText = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  text-align: left;
  margin-bottom: 0;

  &:last-of-type {
    padding-bottom: 2em;
  }
`;

const WeatherError = styled.h2`
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  padding: 1em 0;
`;

const Icon = styled.span`
  width: 30px;
`;
