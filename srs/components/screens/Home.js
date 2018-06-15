import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  SectionList,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

class Home extends Component {

  constructor(props) {
    super(props);

  }

  static navigationOption = {
    title: 'Welcome',
    header: null,
  };

  navigateTo = (screenName) => {

    this.props.navigation.navigate(screenName);

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <TouchableHighlight
            onPress={this.navigateTo.bind(this, 'Profile')}
            underlayColor="transparent"
          >
            <View style={styles.navBtn}>
              <Text style={styles.navBtnText}>
                {'Go to Profile'.toUpperCase()}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.navigateTo.bind(this, 'Todo')}
            underlayColor="transparent"
          >
            <View style={styles.navBtn}>
              <Text style={styles.navBtnText}>
                {'Go to Todo'.toUpperCase()}
              </Text>
            </View>
          </TouchableHighlight>
          <Button
            style={styles.navBnt}
            onPress={this.navigateTo.bind(this, 'Gallery')}
            title="Go to Gallery"
          />

        </View>
        <View style={{ backgroundColor: 'powderblue'}}>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>

        </View>
        <View style={{ backgroundColor: 'steelblue'}}>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <SectionList
            sections={[
              {title: 'D', data: ['sssss']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>

      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7290dd'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffed22',
  },
  navBtn: {
    padding: 10,
    width: 260,
    margin: 10,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#2f8b8c'
  },
  navBtnText: {
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#875736',
    marginBottom: 5,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});