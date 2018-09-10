import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ListIcon, UserIcon, MapIcon, AddEventIcon } from '../Icons';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40px;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Menu = () => (
  <MenuWrapper>
    <NavLink to="/profile/">
      <UserIcon color="#ccc" />
    </NavLink>
    <NavLink to="/map/">
      <MapIcon color="#ccc" />
    </NavLink>
    <NavLink to="/list/">
      <ListIcon color="#ccc" />
    </NavLink>
    <NavLink to="/add-event/">
      <AddEventIcon color="#ccc" />
    </NavLink>
  </MenuWrapper>
);

export default Menu;
