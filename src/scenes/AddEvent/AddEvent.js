import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as addEventActions } from '../../ducks/addEvent';

import AddEventForm from './AddEventForm';

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

class AddEvent extends Component {
  render() {
    return (
      <AddEventWrapper>
        <Header>
          <div>Add new event and wait for other people to join you!</div>
        </Header>
        <AddEventForm />
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
