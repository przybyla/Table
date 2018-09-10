import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as eventListActions } from '../../ducks/places';
import GoogleMapComponent from '../../components/GoogleMap';

const Wrapper = styled.div`
  display: flex;
`;

const EventName = styled.div`
  font-size: 16px;
`;

const EventAdress = styled.div`
  font-size: 12px;
`;

const EventDetails = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  padding: 10px;
  width: 280px;
  a {
    text-decoration: none;
    color: #ccc;
  }
`;

const MapWrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
`;

class List extends Component {
  state = {};
  componentDidMount() {
    const {
      PLACES_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }
  render() {
    const { places } = this.props;
    return (
      <Wrapper>
        <ListWrapper>
          {places.map((items, idx) => (
            <div key={idx}>
              <NavLink to={items.name}>
                <EventName>{items.name}</EventName>
                <EventAdress>
                  {items.street}, {items.city}
                </EventAdress>
                <EventDetails>
                  <div>{items.date}</div>
                  <div>{items.time}</div>
                </EventDetails>
              </NavLink>
            </div>
          ))}
        </ListWrapper>
        <GoogleMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<MapWrapper />}
          mapElement={<div style={{ height: `100%` }} />}
          places={places}
        />
      </Wrapper>
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
)(List);
