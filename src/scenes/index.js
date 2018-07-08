import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Login from './Login';
import Map from './Map';
import List from './List';
import Profile from './Profile';
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
            {/* <Redirect exact path="/login/" component={Login} /> */}
            <Switch>
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/map/" component={Map} />
              <Route exact path="/list/" component={List} />
              <Route exact path="/list/:id" component={PlaceDetails} />
              <Route exact path="/add-event/" component={AddEvent} />
            </Switch>
          </div>
        </Router>
      </AppWrapper>
    );
  }
}

export default Scenes;
