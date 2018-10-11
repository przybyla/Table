import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as addEventActions } from '../../ducks/addEvent';

const AddEventWrapper = styled.div`
  padding: 15px;
  background: #37474f;
  height: 100%;
  box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 25px 0;
  color: #fff;
  font-size: 1.25rem;
`;

const Form = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px 50px 50px;
  .event {
    grid-column: 1 / 5;
    grid-row: 1;
  }
  .game {
    grid-column: 1 / 3;
    grid-row: 2;
  }
  .players {
    grid-column: 3 / 5;
    grid-row: 2;
  }
  .adress {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .city {
    grid-column: 3 / 5;
    grid-row: 3;
  }
  .date {
    grid-column: 1;
    grid-row: 4;
  }
  .hour {
    grid-column: 2;
    grid-row: 4;
  }
  .email {
    grid-column: 3 / 5;
    grid-row: 4;
  }
  .send {
    grid-column: 2;
    grid-row: 5;
    width: 50%;
    justify-self: end;
    background: #ced7db;
    color: #37474f;
    border-radius: 4px;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  }
  .cancel {
    grid-column: 3;
    grid-row: 5;
    width: 50%;
    background: #ced7db;
    color: #37474f;
    border-radius: 4px;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
    color: #707070;
    padding: 5px;
    box-sizing: border-box;
    &::placeholder {
      opacity: 0.5;
      font-size: 10px;
    }
    &:focus {
      outline: 0;
    }
  }
`;

class AddEvent extends Component {
  render() {
    Geocode.setApiKey(apiKey);
    const {
      ADD_EVENT_ACTIONS: { INPUT, GET_COORDS },
      street,
      city
    } = this.props;

    const onSend = () => {
      Geocode.fromAddress(`${street}, ${city}`).then(response => {
        const { lat, lng } = response.results[0].geometry.location;
        if (response.status === 'OK') {
          GET_COORDS({ lat, lng });
        }
      });
    };

    return (
      <AddEventWrapper>
        <Header>
          <div>Add new event and wait for other people to join you!</div>
        </Header>
        <Form>
          <input
            placeholder="Event name"
            onChange={e => INPUT(['eventName', e.target.value])}
            className="event"
          />
          <input
            placeholder="Game"
            onChange={e => INPUT(['game', e.target.value])}
            className="game"
          />
          <input
            placeholder="Number of players"
            onChange={e => INPUT(['numberOfPlayers', e.target.value])}
            className="players"
          />
          <input
            placeholder="Adress"
            onChange={e => INPUT(['adress', e.target.value])}
            className="adress"
          />
          <input
            placeholder="City"
            onChange={e => INPUT(['city', e.target.value])}
            className="city"
          />
          <input
            placeholder="Date"
            onChange={e => INPUT(['date', e.target.value])}
            className="date"
          />
          <input
            placeholder="Hour"
            onChange={e => INPUT(['hour', e.target.value])}
            className="hour"
          />
          <input
            placeholder="E-mail"
            onChange={e => INPUT(['email', e.target.value])}
            className="email"
          />
          <button className="send" onClick={() => onSend()}>
            Send
          </button>
          <NavLink to="../" className="cancel">
            Calcel
          </NavLink>
        </Form>
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
