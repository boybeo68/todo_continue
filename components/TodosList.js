import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, doneTodo }) => {
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => {
          return (
            <Todo
              doneTodo={doneTodo}
              deleteTodo={deleteTodo}
              todo={item}
              index={index}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
