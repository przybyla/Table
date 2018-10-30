import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Back } from '../../components/Icons';
import EventForm from './EventForm';
import { Add } from '../../components/Icons';

import { apiKey } from '../../config';
import GoogleMapComponent from '../../components/GoogleMap';

import { actions as eventDetailsActions } from '../../ducks/eventDetails';

import { eventDetails } from '../../mock/mock';

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

  .back-button {
    height: 30px;
  }

  .event-name {
    margin-left: 15px;
    font-size: 2.125rem;
    color: #fff;
  }
`;
const Content = styled.div`
  display: flex;
  height: calc(100% - 100px);
`;
const EventInfo = styled.div`
  padding: 15px;
  width: 65%;
  position: relative;
`;
const GameInfo = styled.div`
  width: 35%;
`;

const MapWrapper = styled.div`
  height: calc(100vh - 100px);
`;

const Button = styled.button`
  background: #37474f;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

class EventDetails extends Component {
  state = { showEventForm: false };
  componentDidMount() {
    // const {
    //   EVENT_DETAILS_ACTIONS: { REQUEST },
    //   match: {
    //     params: { name }
    //   }
    // } = this.props;
    // REQUEST(name);
  }
  showForm = () => {
    this.setState((prevState: StateType) => ({
      showEventForm: !prevState.showEventForm
    }));
  };
  render() {
    const { showEventForm } = this.state;
    return (
      <EventDetailsWrapper>
        <Header>
          <NavLink className="back-button" to="/">
            <Back />
          </NavLink>
          <div className="event-name">{eventDetails.name}</div>
        </Header>
        <Content>
          <EventInfo>
            <div>
              Adress:
              <div>{eventDetails.city}</div>
              <div>{eventDetails.street}</div>
            </div>
            <div>
              Players: {eventDetails.signedUsers} / {eventDetails.maxUsers}
            </div>
            <div>
              Date:
              <div>
                {eventDetails.date} at {eventDetails.time}
              </div>
            </div>
            <div>
              Game:
              <div>{eventDetails.game}</div>
            </div>
            {showEventForm && <EventForm />}

            <Button onClick={() => this.showForm()}>
              <Add />
            </Button>
          </EventInfo>
          <GameInfo>
            <GoogleMapComponent
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<MapWrapper />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={eventDetails.lat}
              lng={eventDetails.lng}
            />
          </GameInfo>
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
