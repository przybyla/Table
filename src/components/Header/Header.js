import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <MenuButton>Menu</MenuButton>
    <div>LOGO</div>
  </HeaderWrapper>
);

export default Header;

//TODO: button menu chowajacy sie na mobilce, pokazujacy sie na desktopie
