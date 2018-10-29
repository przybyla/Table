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
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
`;

const LeftColumn = styled.div`
  width: 300px;
`;
const RightColumn = styled.div`
  width: calc(100vw - 300px);
  position: relative;
`;

const MapWrapper = styled.div`
  height: 100vh;
  width: calc(100vw - 300px);
`;

class Scenes extends Component {
  state = {};
  rightColumn = React.createRef();
  render() {
    const { events } = this.props;
    return (
      <Router history={history}>
        <AppWrapper>
          <LeftColumn>
            <Route path="/:event?/:name?" component={List} />
          </LeftColumn>
          <RightColumn>
            <Switch>
              <Route exact path="/add-event" component={AddEvent} />
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
                    events={events}
                  />
                )}
              />
            </Switch>
          </RightColumn>
        </AppWrapper>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => ({
  events: state.events.get('events')
});

export default connect(
  mapStateToProps,
  {}
)(Scenes);
