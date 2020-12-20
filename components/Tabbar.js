import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabbarItem from './TabbarItem';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clickTabbar = (lable) => {
    this.props.setType(lable);
  };

  render() {
    return (
      <View style={styles.container}>
        <TabbarItem lable={'All'} clickTabbar={this.clickTabbar} />
        <TabbarItem lable={'Complete'} clickTabbar={this.clickTabbar} />
        <TabbarItem lable={'Active'} clickTabbar={this.clickTabbar} />
      </View>
    );
  }
}
