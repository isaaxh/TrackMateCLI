import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
