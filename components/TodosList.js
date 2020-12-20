import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, doneTodo, typeTodo }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((t) => t.isCheck);
      case 'Active':
        return todos.filter((t) => !t.isCheck);
    }
  };
  todos = getVisibleTodos(todos, typeTodo);
  // console.log(typeTodo);
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
