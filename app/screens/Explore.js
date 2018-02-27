import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Explore extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <Text>
          Explore
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

export default Explore;
