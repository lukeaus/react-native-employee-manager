import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import secrets from '../secrets';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(secrets.firebaseConfig);
  }

  render() {
    return (
      // second arg is default state, 3rd arg is store enhancers
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
