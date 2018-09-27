import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/places';
import { actions as addEventActions } from '../../ducks/addEvent';

import { Add } from '../../components/Icons';
import SearchInput from './components/SearchInput';
import EventItem from './components/EventItem';

const Wrapper = styled.div`
  display: flex;
  background: #ced7db;
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

const Button = styled.button`
  background: #37474f;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  border-radius: 50%;
  box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
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

        <Button onClick={SHOW_MODAL}>
          <Add />
        </Button>
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
