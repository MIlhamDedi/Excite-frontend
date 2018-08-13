import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const defaultProps = {
  imageSource: "placeholder",
  title: "Oops!",
  time: "Something went wrong",
  location: "Please report to dev about this error",
}

class Card extends Component {
  render() {
    const { imageSource, title, time, location } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ elevation: 1, backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
          <Image source={{ uri: imageSource }} style={styles.image} />
        </View>
        <View style={styles.textContainer} >
          <Text>{title}</Text>
          <Text>{time}</Text>
          <Text>{location}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: 300,
    elevation: 3,
    flex: 1,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image: {
    height: 140,
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 20,
  }
});

Card.defaultProps = defaultProps;
export default Card;
