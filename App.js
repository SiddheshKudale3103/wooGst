import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from './App/Components/CustomHeader/CustomHeader';

const App = () => {
  const [writtenText, setWrittenText] = useState('');
  const onType = text => {
    console.log('==========>', text);
    setWrittenText(text);
  };

  return (
    <View>
      <Text>App</Text>
      <CustomHeader title={'HEADER'} />
      <TextInput
        onChangeText={onType}
        placeholder={'TYPE HERE'}
        value={writtenText}
      />
    </View>
  );
};

export default App;
