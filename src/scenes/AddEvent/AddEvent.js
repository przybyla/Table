import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as addEventActions } from '../../ducks/addEvent';

import { Back } from '../../components/Icons';
import AddEventForm from './AddEventForm';

const Wrapper = styled.div`
  height: 100vh;
`;
const AddEventWrapper = styled.div`
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #37474f;
  padding: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

class AddEvent extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <NavLink to="/">
            <Back />
          </NavLink>
          <div>Add new event and wait for other people to join you!</div>
        </Header>
        <AddEventWrapper>
          <AddEventForm />
        </AddEventWrapper>
      </Wrapper>
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
