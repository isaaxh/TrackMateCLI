import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/services/state/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-black">
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
