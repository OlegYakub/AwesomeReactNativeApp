import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './CreateTodoStyles';

const CreateTodoView = ({onChangeValue, todoName, createTodo}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        New Todo
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={todoName}
          placeholder="Type here new Todo"
          onChangeText={(text) => onChangeValue(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={createTodo}
        >
          <Text style={styles.buttonText}>
            Push
          </Text>

        </TouchableOpacity>
      </View>

    </View>
  )
};

export default CreateTodoView;