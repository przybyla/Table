import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Back } from '../../components/Icons';

import { actions as eventDetailsActions } from '../../ducks/eventDetails';

const EventDetailsWrapper = styled.div`
  height: 100vh;
  flec-direction: column;
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
const Content = styled.div`
  display: flex;
  height: calc(100% - 100px);
`;
const EventInfo = styled.div`
  padding: 15px;
  width: 65%;
`;
const GameInfo = styled.div`
  padding: 15px;
  background: #ced7db;
  width: 35%;
`;

class EventDetails extends Component {
  state = {};
  componentDidMount() {
    const {
      EVENT_DETAILS_ACTIONS: { REQUEST },
      match: {
        params: { name }
      }
    } = this.props;
    REQUEST(name);
  }
  render() {
    return (
      <EventDetailsWrapper>
        <Header>
          <NavLink to="/">
            <Back />
          </NavLink>
        </Header>
        <Content>
          <EventInfo>xd</EventInfo>
          <GameInfo>XD</GameInfo>
        </Content>
      </EventDetailsWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  EVENT_DETAILS_ACTIONS: bindActionCreators(eventDetailsActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  eventDetails: state.eventDetails.get('details')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails);
