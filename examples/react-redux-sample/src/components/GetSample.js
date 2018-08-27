import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stateManager/actions';

class GetSample extends Component {
  render() {
    const { counties, getCounties } = this.props;
    return (
      <Fragment>
        <button onClick={getCounties}>Get RJ counties</button>
        <div>
          <h1>Response</h1>
          <p>{JSON.stringify(counties)}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ counties }) => ({ counties });

const mapDispatchToProps = (dispatch) => ({
  getCounties: () => dispatch(actions.getCounties())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetSample);
