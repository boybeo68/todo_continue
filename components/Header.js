import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100',
  },
});
export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Todos </Text>
      </View>
    );
  }
}
