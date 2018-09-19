import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { apiKey } from '../config';
import List from './List';
import EventDetails from './EventDetails';
import AddEvent from './AddEvent';
import GoogleMapComponent from '../components/GoogleMap';

const AppWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
`;

const MapWrapper = styled.div`
  height: 100vh;
  width: calc(100vw - 300px);
`;

class Scenes extends Component {
  state = {};
  render() {
    const { places } = this.props;
    return (
      <Router history={history}>
        <AppWrapper>
          <Route path="/:event?/:name?" component={List} />
          <Switch>
            <Route exact path="/event/:name" component={EventDetails} />
            <Route
              exact
              path="/"
              render={() => (
                <GoogleMapComponent
                  isMarkerShown
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<MapWrapper />}
                  mapElement={<div style={{ height: `100%` }} />}
                  places={places}
                />
              )}
            />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => ({
  places: state.places.get('places')
});

export default connect(
  mapStateToProps,
  {}
)(Scenes);
