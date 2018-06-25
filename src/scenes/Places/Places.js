import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/places';

class Places extends Component {
  state = {};
  componentDidMount() {
    const {
      ADRESS_LIST_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }
  render() {
    const { places } = this.props;
    return (
      <div>
        {places.map((items, idx) => (
          <NavLink key={idx} to={items.name}>
            <div>{items.name}</div>
            <div>{items.city}</div>
            <div>{items.street}</div>
          </NavLink>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  ADRESS_LIST_ACTIONS: bindActionCreators(eventListActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  places: state.places.get('places')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
