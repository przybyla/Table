import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Login from './Login';
import Places from './Places';
import PlaceDetails from './PlaceDetails';

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
            <Route exact path="/login/" component={Login} />
            <Route exact path="/places/" component={Places} />
            <Route exact path="/places/:id" component={PlaceDetails} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default Scenes;
