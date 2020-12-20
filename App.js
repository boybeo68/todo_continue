import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import Tabbar from './components/Tabbar';
import TodoList from './components/TodosList';
let countId = 0;
export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [typeTodo, settypeTodo] = useState('All');
  useEffect(() => {
    if (todos.length !== 0) {
      // console.log(todos);
    }
  }, [todos]);
  const addTodo = (title) => {
    countId++;
    let todo = {
      id: countId,
      title: title,
      isCheck: false,
    };
    setTodos([todo, ...todos]);
  };
  const deleteTodo = (id) => {
    let newArray = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newArray);
  };

  const doneTodo = (id) => {
    let newTodo = JSON.parse(JSON.stringify(todos));
    newTodo.forEach((item) => {
      if (item.id === id) {
        item.isCheck = !item.isCheck;
      }
    });
    setTodos(newTodo);
  };
  const setType = (lable) => {
    settypeTodo(lable);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Input addTodo={addTodo} />
      <TodoList
        typeTodo={typeTodo}
        deleteTodo={deleteTodo}
        doneTodo={doneTodo}
        todos={todos}
      />
      <Tabbar setType={setType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
