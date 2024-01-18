import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../services/state/store';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  incrementAsync,
} from '../services/state/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View className="gap-1">
      <Text>{count}</Text>
      <View>
        <Button
          title="increment"
          onPress={() => dispatch(incrementAsync(10))}
        />
      </View>
      <View>
        <Button
          title="decrement"
          onPress={() => dispatch(decrementByAmount(10))}
        />
      </View>
    </View>
  );
};

export default Counter;
