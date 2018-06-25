import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/places';

const PlacesStyle = styled.div`
  a {
    text-decoration: none;
    color: #ccc;
  }
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
        {places.map((items, idx) => (
          <NavLink key={idx} to={items.name}>
            <div>{items.name}</div>
            <div>{items.city}</div>
            <div>{items.street}</div>
          </NavLink>
        ))}
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
