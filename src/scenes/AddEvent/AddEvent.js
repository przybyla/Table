import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as addEventActions } from '../../ducks/addEvent';

const AddEventWrapper = styled.div`
  padding: 10px;
`;

const Label = styled.p`
  margin: 0;
`;

class AddEvent extends Component {
  render() {
    const {
      ADD_EVENT_ACTIONS: { INPUT }
    } = this.props;
    return (
      <AddEventWrapper>
        {/* TODO: move input to component */}
        <div>
          <input
            type="text"
            onChange={e => INPUT(['adress', e.target.value])}
          />
          <Label>Adress</Label>
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
        <div>
          <input type="checkbox" />
          <Label>For begginers</Label>
        </div>
        <div>
          <input type="checkbox" />
          <Label>Private</Label>
        </div>
        <button>Wyslij</button>
      </AddEventWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  ADD_EVENT_ACTIONS: bindActionCreators(addEventActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(AddEvent);
