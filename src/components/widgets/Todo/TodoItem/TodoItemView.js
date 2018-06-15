
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './TodoListStyles';

const TodoItemView = ({
                        name, removeTodo
                      }) => {
  return (
    <View style={styles.item}>

        <Text style={styles.itemText}>
          {name}
        </Text>

      <View style={styles.controls}>
        <TouchableOpacity
          onPress={removeTodo}
        >
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default TodoItemView