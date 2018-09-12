import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as USER_ACTIONS } from '../../ducks/user';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

const LoginBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 10px 0;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid;
`;

const Button = styled.button`
  background: #009cff;
  color: #fff;
  padding: 5px;
  border: 0;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`;

class Login extends Component {
  state = { login: '', password: '' };
  handleChange = (name, val) => {
    this.setState({ [name]: val });
  };
  handleSendButton = () => {
    this.props.USER_ACTIONS.LOG_IN({
      login: this.state.login,
      password: this.state.password
    });
  };
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          Log in form
          <Input
            type="string"
            value={this.state.login}
            onChange={e => this.handleChange('login', e.target.value)}
            placeholder="login"
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange('password', e.target.value)}
            placeholder="password"
          />
          <Button onClick={this.handleSendButton}>Log me in kurła</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  USER_ACTIONS: bindActionCreators(USER_ACTIONS, dispatch)
});
export default connect(
  null,
  mapDispatchToProps
)(Login);
