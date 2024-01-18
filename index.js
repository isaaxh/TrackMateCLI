/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/services/state/store';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
