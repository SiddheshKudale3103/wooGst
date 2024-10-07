import {View, Text} from 'react-native';
import React, {memo} from 'react';

const CustomHeader = ({title}) => {
  console.log('----Not memoised');
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};

export default memo(CustomHeader);
