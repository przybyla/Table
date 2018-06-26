import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from '../../components/GoogleMap';
import { actions as eventListActions } from '../../ducks/places';

const PlacesStyle = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #ccc;
  }
`;

const Place = styled.div`
  width: 100%;
  height: 100px;
  @media (min-width: 1200px) {
    width: 20%;
  }
`;

export const Divider = styled.span`
  margin: 10px 0;
  display: block;
  border: 0.5px solid #ccc;
`;

class Places extends Component {
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
      <PlacesStyle>
        <Place>
          {places.map((items, idx) => (
            <div key={idx}>
              <NavLink to={items.name}>
                <div>{items.name}</div>
                <div>{items.city}</div>
                <div>{items.street}</div>
              </NavLink>
              <Divider />
            </div>
          ))}
        </Place>
        <GoogleMap />
      </PlacesStyle>
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
)(Places);
