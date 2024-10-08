import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './App/Store/store';
import Navigation from './App/Navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
