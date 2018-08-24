import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../stateManager/store';
import GetSample from './GetSample';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GetSample />
      </Provider>
    );
  }
}

export default App;
