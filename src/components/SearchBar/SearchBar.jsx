import React from 'react';
import styled from 'styled-components';

const SearchBar = props => {
  return (
    <FormWrapper>
      <form id="myForm" onSubmit={props.fetchWeather}>
        <InputWrapper>
          <Icon>
            <i className="far fa-building" />
          </Icon>
          <Field name="city" type="text" placeholder="City" />
        </InputWrapper>
        <InputWrapper>
          <Icon>
            <i className="fas fa-globe" />
          </Icon>
          <Field name="country" type="text" placeholder="Country" />
        </InputWrapper>

        <br />
        <Button>Get weather</Button>
      </form>
      <Button onClick={props.clearData}>Clear</Button>
    </FormWrapper>
  );
};

export default SearchBar;

const Button = styled.button`
  display: inline-block;
  border: 2px solid #21262b;
  background-color: white;
  color: #21262b;
  font-size: 1em;
  padding: 5px 0px;
  border-radius: 100px;
  width: 100%;
  margin: 5px 0;
  outline: none;
  overflow: hidden;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:hover {
    cursor: pointer;
    color: white;
  }

  &:focus {
    outline: none;
    color: white;
  }

  &:active {
    color: white;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #21262b;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const Icon = styled.span`
  display: inline-block;
  margin-bottom: 7px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  padding: 1em 3em;

  @media screen and (max-width: 830px) {
    margin: 0 auto;
  }
`;

const Field = styled.input`
  outline: none;
  font-size: 1.2em;
  padding: 5px 10px;
  margin-bottom: 5px;
  width: 92%;
  background: transparent;
  border: none;
  color: black;
  text-shadow: 0;
  border-bottom: 2px solid transparent;

  &:focus {
    border-bottom: 2px solid #21262b;
  }

  &::placeholder {
    color: #21262b;
    opacity: 1;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
