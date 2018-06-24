import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as eventListActions } from '../../ducks/adressList';
import history from '../history';

class AdressList extends Component {
  state = {};
  componentDidMount() {
    const {
      ADRESS_LIST_ACTIONS: { REQUEST }
    } = this.props;
    REQUEST();
  }
  render() {
    const { adressList } = this.props;
    return (
      <div>
        {adressList.map((items, idx) => (
          <NavLink key={idx} to={items.name}>
            <div>{items.name}</div>
            <div>{items.city}</div>
            <div>{items.street}</div>
          </NavLink>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({
  ADRESS_LIST_ACTIONS: bindActionCreators(eventListActions, dispatch)
});

const mapStateToProps = (state: any) => ({
  adressList: state.adressList.get('adressList')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdressList);
