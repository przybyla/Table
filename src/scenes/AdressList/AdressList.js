import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdressList extends Component {
  state = {};
  render() {
    return <div />;
  }
}

const mapDispatchToProps = (dispatch: () => void) => ({});

const mapStateToProps = (state: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdressList);
