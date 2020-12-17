import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    flexDirection: 'row',
  },
  text: {
    color: 'red',
    fontSize: 20,
    marginRight: 10,
  },
});
const Todo = ({ todo, doneTodo, deleteTodo }) => {
  console.log(todo);
  return (
    <View style={styles.container}>
      <Text style={{ color: todo.isCheck ? 'red' : 'black' }}>
        {todo.title}
        {todo.isCheck ? 'true' : 'false'}
      </Text>
      <View style={styles.action}>
        <Text
          onPress={() => {
            doneTodo(todo.id);
          }}
          style={styles.text}
        >
          Done
        </Text>
        <Text
          onPress={() => {
            deleteTodo(todo.id);
          }}
          style={[styles.text, { color: 'blue' }]}
        >
          Xoá
        </Text>
      </View>
    </View>
  );
};

export default Todo;
