import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Profile extends Component {

  static navigationOption = {
    title: 'Gallery',
  };

  render() {
    return (
      <View>
        <Text>
          Hello its Profile !!!
        </Text>
      </View>
    )
  }
}

export default Profile;