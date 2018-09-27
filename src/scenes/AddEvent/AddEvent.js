import React, { Component } from 'react';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as addEventActions } from '../../ducks/addEvent';

const AddEventWrapper = styled.div`
  padding: 15px;
  position: absolute;
  z-index: 99;
  background: #ced7db;
  height: 550px;
  width: 1000px
  top: calc(50% - 275px);
  left: calc(50% - 500px);
`;

const Label = styled.p`
  margin: 0;
`;

class AddEvent extends Component {
  render() {
    Geocode.setApiKey(apiKey);
    const {
      ADD_EVENT_ACTIONS: { INPUT, PUT, GET_COORDS },
      newEvent,
      street,
      city
    } = this.props;
    const onSend = () => {
      Geocode.fromAddress(`${street}, ${city}`).then(response => {
        const { lat, lng } = response.results[0].geometry.location;
        if (response.status === 'OK') {
          GET_COORDS({ lat, lng });
          PUT(newEvent);
        }
      });
    };

    return (
      <AddEventWrapper>
        {/* TODO: move input to component */}
        <div>
          <input
            type="text"
            onChange={e => INPUT(['street', e.target.value])}
          />
          <Label>Adress</Label>
        </div>
        <div>
          <input type="text" onChange={e => INPUT(['city', e.target.value])} />
          <Label>Miasto</Label>
        </div>
        <div>
          <input type="text" onChange={e => INPUT(['time', e.target.value])} />
          <Label>Time</Label>
        </div>
        <div>
          <input type="text" onChange={e => INPUT(['game', e.target.value])} />
          <Label>Game</Label>
        </div>
        <div>
          <input
            type="text"
            onChange={e => INPUT(['players', e.target.value])}
          />
          <Label>Number of players</Label>
        </div>

        <button onClick={() => onSend()}>Wyslij</button>
      </AddEventWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  ADD_EVENT_ACTIONS: bindActionCreators(addEventActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  newEvent: state.addEvent.get('newEvent'),
  street: state.addEvent.getIn(['newEvent'], 'street'),
  city: state.addEvent.getIn(['newEvent'], 'city')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
