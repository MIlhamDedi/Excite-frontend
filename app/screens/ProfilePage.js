import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { GoogleSignin } from 'react-native-google-signin'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      user: GoogleSignin.currentUser()
    }
  }
  onNavigatorEvent(event) {
    if (event.id == 'willAppear') {
      if (this.scroll) {
        this.scroll.scrollTo({x: 0, y: 0, animated: false});
      }
    }
    if (event.id == 'bottomTabReselected') {
      if (this.scroll) {
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text>Profile</Text>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{alignItems: 'flex-start'}}
          ref={(c) => {this.scroll = c}}
        >

        </ScrollView>
      </View>
    )
  }

  _signOut() {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => {
        this.setState({ user: null })
      })
      .done()
  }
}
var {height, width} = Dimensions.get('window');
height = height-55;
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  headerBar:{
    elevation: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f44336",
  },
  scrollContainer:{
  },
});
