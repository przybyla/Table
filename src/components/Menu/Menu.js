import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuWrapper = styled.div`
  display: flex;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  width: 25%;
  height: 40px;
  display: flex
  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
    color: #ccc;
    }
`;

const Menu = () => (
  <MenuWrapper>
    <MenuButton>
      <NavLink to="/profile/"> Profile </NavLink>
    </MenuButton>
    <MenuButton>
      <NavLink to="/map/"> Map </NavLink>
    </MenuButton>
    <MenuButton>
      <NavLink to="/list/"> List </NavLink>
    </MenuButton>
    <MenuButton>
      <NavLink to="/add-event/"> Add event </NavLink>
    </MenuButton>
  </MenuWrapper>
);

export default Menu;
