import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <Text>
          Home
        </Text>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
  },
});

export default HomeScreen;
