import React from 'react';
import styled from 'styled-components';
import { Add } from '../../../../components/Icons';

const Button = styled.div`
  background: #37474f;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

const AddButton = () => (
  <Button>
    <Add />
  </Button>
);

export default AddButton;
