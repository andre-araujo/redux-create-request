import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stateManager/actions';

class GetSample extends Component {
  render() {
    const { regions, counties, getRegions, getCounties } = this.props;
    return (
      <Fragment>
        <button onClick={getRegions}>Get Brazilian regions</button>
        <button onClick={getCounties}>Get RJ counties</button>
        <div>
          <h1>Response 1</h1>
          <p>{JSON.stringify(regions)}</p>
        </div>
        <div>
          <h1>Response 2</h1>
          <p>{JSON.stringify(counties)}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ regions, counties }) => ({ regions, counties });

const mapDispatchToProps = (dispatch) => ({
  getRegions: () => dispatch(actions.getRegions()),
  getCounties: () => dispatch(actions.getCounties())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetSample);
