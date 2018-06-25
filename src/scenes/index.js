import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Menu from '../components/Menu';
import Login from './Login';
import Places from './Places';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Scenes extends Component {
  state = {};
  render() {
    return (
      <AppWrapper>
        <Router history={history}>
          <Switch>
            <Redirect to="/login/" />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/adress-list/" component={Places} />
            <Route exact path="/adress-list/:id?" component={PlaceDetails} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default Scenes;
