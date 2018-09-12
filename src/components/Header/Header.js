import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuIcon, CloseMenuIcon } from '../Icons';
import { actions as responsiveActions } from '../../ducks/responsive';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;
`;

const Menu = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background: #ccc;
  color: #343d46;
  padding-top: 50px;
`;

const MenuButton = styled.div`
  position: absolute;
  left: 15px;
  top: 25px;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;

class Header extends Component {
  render() {
    const {
      menuVisible,
      RESPONSIVE_ACTIONS: { SHOW_MENU, HIDE_MENU }
    } = this.props;
    return (
      <HeaderWrapper>
        <MenuButton onClick={SHOW_MENU}>
          <MenuIcon color="#000" />
        </MenuButton>
        {menuVisible && (
          <Menu>
            <MenuButton onClick={HIDE_MENU}>
              <CloseMenuIcon color="#000" />
            </MenuButton>
            <NavLink to="/profile/">Profile </NavLink>
            <NavLink to="/map/">Map </NavLink>
            <NavLink to="/list/">Event List </NavLink>
            <NavLink to="/add-event/">Add Event </NavLink>
          </Menu>
        )}
        <div>LOGO</div>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  RESPONSIVE_ACTIONS: bindActionCreators(responsiveActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  menuVisible: state.responsive.get('menuVisible')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
