import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMapComponent from '../../components/GoogleMap';

import { actions as placeDetailsActions } from '../../ducks/placeDetails';

const PlaceDetailsWrapper = styled.div`
  padding: 10px;
`;

const MapWrapper = styled.div`
  height: 300px;
  width: 100vw;
`;

class PlaceDetails extends Component {
  state = {};
  componentDidMount() {
    const {
      PLACE_DETAILS_ACTIONS: { REQUEST },
      match: {
        params: { id }
      }
    } = this.props;

    REQUEST(id.toLowerCase());
  }
  render() {
    const { details } = this.props;
    return (
      <PlaceDetailsWrapper>
        <div>{details.name}</div>
        <div>{details.city}</div>
        <div>{details.street}</div>
        {!details.private && (
          <div>
            {details &&
              details.events &&
              details.events.map((item, idx) => (
                <div key={idx}>
                  <div>{item.eventName}</div>
                  <div>{item.date}</div>
                  <div>{item.eventStart}</div>
                  <div>{item.paid}</div>
                </div>
              ))}
            <GoogleMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6C8Q4vxD-PcbFdBaNGXVcqJTZHSlpIIw&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<MapWrapper />}
              mapElement={<div style={{ height: `100%` }} />}
              places={details}
            />
          </div>
        )}
      </PlaceDetailsWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  PLACE_DETAILS_ACTIONS: bindActionCreators(placeDetailsActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  details: state.placeDetails.get('details')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDetails);
