import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Map from './Map';
import List from './List';
import AddEvent from './AddEvent';
import PlaceDetails from './PlaceDetails';
import Menu from '../components/Menu';
import Header from '../components/Header';

const AppWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`;

class Scenes extends Component {
  state = {};
  render() {
    return (
      <AppWrapper>
        <Router history={history}>
          <div>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" component={List} />
            </Switch>
          </div>
        </Router>
      </AppWrapper>
    );
  }
}

export default Scenes;
