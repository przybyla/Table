import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiKey } from '../../config';
import { actions as eventListActions } from '../../ducks/places';
import { actions as addEventActions } from '../../ducks/addEvent';

import AddButton from './components/AddButton';
import SearchInput from './components/SearchInput';
import EventItem from './components/EventItem';

const Wrapper = styled.div`
  display: flex;
  background: #ced7db;
  width: 300px;
  height: 100vh;
  flex-direction: column;
  box-shadow: 5px 0px 20px -6px rgba(0, 0, 0, 0.75);
  z-index: 99;
  align-items: center;
`;

const ListWrapper = styled.div`
  background: #fff;
  overflow-y: scroll;
  border-radius: 4px;
  width: 250px;
  height: 500px;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
`;

const MapWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

class List extends Component {
  state = {};

  componentDidMount() {
    const {
      PLACES_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }

  render() {
    const {
      places,
      ADD_EVENT_ACTIONS: { SHOW_MODAL }
    } = this.props;
    return (
      <Wrapper>
        <SearchInput />
        <ListWrapper>
          {places.map((item, idx) => (
            <EventItem
              key={idx}
              name={item.name}
              street={item.street}
              city={item.city}
              date={item.date}
              time={item.time}
            />
          ))}
        </ListWrapper>
        <AddButton onClick={SHOW_MODAL} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  PLACES_ACTIONS: bindActionCreators(eventListActions, dispatch),
  ADD_EVENT_ACTIONS: bindActionCreators(addEventActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  places: state.places.get('places')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
