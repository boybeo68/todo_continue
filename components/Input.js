import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    color: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  content: { width: '100%', justifyContent: 'center', alignItems: 'center' },
});
const Input = ({ addTodo }) => {
  const [input, setinput] = useState('');
  return (
    <View style={styles.content}>
      <TextInput
        placeholder={'What need to be done? '}
        onChangeText={(text) => {
          setinput(text);
        }}
        value={input}
        style={styles.input}
        onSubmitEditing={() => {
          addTodo(input);
        }}
      />
    </View>
  );
};

export default Input;
