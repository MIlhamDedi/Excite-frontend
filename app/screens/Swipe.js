import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Swipe extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <Text>
          Swipe
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

export default Swipe;
