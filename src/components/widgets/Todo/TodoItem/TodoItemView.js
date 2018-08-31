
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './TodoItemStyles';

const TodoItemView = ({
                        name,
                        removeTodo,
                        completed,
                        toggleComplete
                      }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={[styles.itemText, completed  && styles.itemTextCompleted]}>
          {name}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlItem}
          onPress={removeTodo}
        >

          <Image
            source={require('../../../../images/icons/rubbish-bin.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlItem}
          onPress={toggleComplete}
        >
        {
          completed ?
            (<Image  source={require('../../../../images/icons/check-box.png')} />) :
            (<Image  source={require('../../../../images/icons/check-box-empty.png')} />)
        }
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default TodoItemView