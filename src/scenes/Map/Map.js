import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/places';
import GoogleMapComponent from '../../components/GoogleMap';

const MapWrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  @media (min-width: 1200px) {
    height: calc(100vh - 30px);
  }
`;

class Map extends Component {
  componentDidMount() {
    const {
      PLACES_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }
  render() {
    const { places } = this.props;
    return (
      <GoogleMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6C8Q4vxD-PcbFdBaNGXVcqJTZHSlpIIw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapWrapper />}
        mapElement={<div style={{ height: `100%` }} />}
        places={places}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  PLACES_ACTIONS: bindActionCreators(eventListActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  places: state.places.get('places')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
