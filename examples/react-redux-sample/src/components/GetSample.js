import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stateManager/actions';

class GetSample extends Component {
  render() {
    const { regions, getRegions } = this.props;
    return (
      <Fragment>
        <button onClick={getRegions}>Get BR regions</button>
        <div>
          <h1>Response</h1>
          <p>{JSON.stringify(regions)}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ regions }) => ({ regions });

const mapDispatchToProps = (dispatch) => ({
  getRegions: () => dispatch(actions.getRegions())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetSample);
