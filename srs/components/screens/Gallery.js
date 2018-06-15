import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  DrawerLayoutAndroid
} from 'react-native';

class Gallery extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOption = {
    title: 'Gallery',
  };

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <View>
        <Text>
          Hello its Galary!!!
        </Text>
        <Button
          title="Open something"
        />

      </View>
    )
  }
}

export default Gallery;