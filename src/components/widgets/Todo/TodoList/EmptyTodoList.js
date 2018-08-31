import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const EmptyTodoList = () => {
  return (
    <View>
      <Text style={styles.text}>
        The list is Empty...
      </Text>
    </View>
  )
};

export default EmptyTodoList;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#6282ff',
    fontSize: 18,
  }
});
