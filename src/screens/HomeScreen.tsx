import {View, Text} from 'react-native';
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import Counter from '../components/Counter';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <WelcomeScreen />
      <Counter />
    </View>
  );
};

export default HomeScreen;
