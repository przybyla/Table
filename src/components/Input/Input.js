import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  width: 250px;
  height: 45px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  color: #707070;
  padding: 5px;
  box-sizing: border-box;
  margin: 25px 0 40px 0;
  &::placeholder {
    opacity: 0.5;
    font-size: 10px;
  }
  &:focus {
    outline: 0;
  }
`;

const Input = placeholder => <InputWrapper />;

export default Input;
