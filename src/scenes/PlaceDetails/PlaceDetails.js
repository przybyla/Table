import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as placeDetailsActions } from '../../ducks/placeDetails';

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
      <div>
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
          </div>
        )}
      </div>
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
