import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as responsiveActions } from '../../ducks/responsive';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background: #fff;
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

class Header extends Component {
  render() {
    const {
      menuVisible,
      RESPONSIVE_ACTIONS: { SHOW_MENU, HIDE_MENU }
    } = this.props;
    return (
      <HeaderWrapper>
        <MenuButton onClick={SHOW_MENU}>Menu</MenuButton>
        {menuVisible && (
          <Menu>
            <MenuButton onClick={HIDE_MENU}>Menu</MenuButton>
            test
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
