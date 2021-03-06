import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/events';
import { actions as addEventActions } from '../../ducks/addEvent';

import { Add } from '../../components/Icons';
import EventItem from './components/EventItem';

import { events } from '../../mock/mock';

const Wrapper = styled.div`
  display: flex;
  background: #ced7db;
  height: 100vh;
  flex-direction: column;
  box-shadow: 5px 0px 20px -6px rgba(0, 0, 0, 0.75);
  z-index: 99;
  align-items: center;
  input {
    width: 250px;
    height: 45px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
    color: #707070;
    padding: 5px;
    box-sizing: border-box;
    margin: 25px 0 40px 0;
    &::placeholder {
      opacity: 0.5;
      font-size: 10px;
    }
    &:focus {
      outline: 0;
    }
  }
`;

const ListWrapper = styled.div`
  background: #fff;
  overflow-y: scroll;
  border-radius: 4px;
  width: 250px;
  height: calc(100vh - 56px);
  margin: 15px 0;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  a {
    text-decoration: none;
    color: #37474f;
  }
`;
const ButtonWrapper = styled.div`
  height: 56px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background: #37474f;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
`;

class List extends Component {
  state = {};

  componentDidMount() {
    // const {
    //   EVENTS_ACTIONS: { REQUEST }
    // } = this.props;
    // REQUEST();
  }

  render() {
    // const { events } = this.props;
    return (
      <Wrapper>
        <ListWrapper>
          {events.map((item, idx) => (
            <EventItem
              key={idx}
              name={item.name}
              street={item.street}
              city={item.city}
              date={item.date}
              time={item.time}
              game={item.game}
              signedUsers={item.signedUsers}
              maxUsers={item.maxUsers}
            />
          ))}
        </ListWrapper>
        <ButtonWrapper>
          <Button>
            <NavLink to="/add-event">
              <Add />
            </NavLink>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  EVENTS_ACTIONS: bindActionCreators(eventListActions, dispatch),
  ADD_EVENT_ACTIONS: bindActionCreators(addEventActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  events: state.events.get('events')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
