import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Component1 from './components/Components1';
import Component2 from './components/Components2';

import store from './store';

import { createStore, applyMiddleware } from '../node_modules/redux';
  

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <Component1 />
      <hr />
      <Component2 />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Provider>
    );
  }
}

export default App;
