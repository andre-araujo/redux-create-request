import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stateManager/actions';

class GetSample extends Component {
  onSubmit = e => {
    e.preventDefault();

    this.props.getRegions();
  }

  render() {
    console.log(this.props.regions);
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <button type="submit">get things</button>
        </form>

        <div>
          <h1>Response</h1>
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
