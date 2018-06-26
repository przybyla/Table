import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as loginActions } from '../../ducks/login';

const LoginStyle = styled.div`
  text-align: center;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  max-width: 375px;
  margin: 10px 0;
`;

const LoginButton = styled.button`
  height: 50px;
  width: 300px;
  background: #fff;
  border: 1px solid #707070;
`;

class Login extends Component {
  state = {};
  render() {
    const {
      LOGIN_ACTIONS: { EMAIL, PASSWORD, REQUEST }
    } = this.props;
    return (
      <LoginStyle>
        <Input onChange={e => EMAIL(e.target.value)} type="text" />
        <Input onChange={e => PASSWORD(e.target.value)} type="password" />
        <LoginButton onClick={() => REQUEST()}>LOGIN</LoginButton>
      </LoginStyle>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  LOGIN_ACTIONS: bindActionCreators(loginActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
