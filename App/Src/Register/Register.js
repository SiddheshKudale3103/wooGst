import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {onPressCounter} from '../../Features/Slices/CounterSlice/CounterSlice';

const Register = () => {
  const [initialNum, setInitialNum] = useState(0);
  const navigation = useNavigation();
  const state = useSelector(state => state.Counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = params => {
    console.log('================>');
  };

  const onPressBtn = () => {
    // navigation.navigate('Dashboard');
    setInitialNum(prev => prev + 1);
  };

  const onPressAdd = () => {
    dispatch(onPressCounter(initialNum));
  };

  return (
    <View>
      <TouchableOpacity onPress={onPressBtn}>
        <Text>Register {initialNum}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAdd}>
        <Text>add value</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAdd}>
        <Text>Store VAlue :{state}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
