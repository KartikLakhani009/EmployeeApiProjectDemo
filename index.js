/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './src/route/AppNavigator';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/Redux/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const AppContainer = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
