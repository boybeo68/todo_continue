import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const TabbarItem = ({ lable, clickTabbar }) => {
  return (
    <TouchableOpacity
      onPress={() => clickTabbar(lable)}
      style={{
        width: '33%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{lable}</Text>
    </TouchableOpacity>
  );
};

export default TabbarItem;
