import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as placeDetailsActions } from '../../ducks/places';

class PlaceDetails extends Component {
  state = {};
  componentDidMount() {
    const {
      PLACE_DETAILS_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }
  render() {
    return (
      <div>
        <div>TEST</div>
        <div>MAPA</div>
        <div>Lista wydarzen</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  PLACE_DETAILS_ACTIONS: bindActionCreators(placeDetailsActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetails);
