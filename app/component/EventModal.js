import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const defaultProps = {
  eventID: "",
  eventName: "",
  Time: "",
  Description: "",
  eventImage: ""
}

class EventModal extends Component {
  render() {
    const { eventID, eventName, Time, Description, eventImage } = this.props;
    return (
      <View style={styles.container} >
        <View style={styles.topBar} >
          <Text style={styles.text} >
            {eventName}
          </Text>
        </View>
        <View style={styles.eventData} >
          <View style={styles.eventImageContainer} >
            <Image style={styles.eventImage} source={eventImage} />
          </View>
          <ScrollView style={styles.eventDetail} >
            <Text style={styles.text} >
              {eventID}{'\n'}{eventName}{"\n"}{Time}{"\n"}{Description}{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  topBar: {
  },
  eventImageContainer: {
  },
  eventImage: {
  },
  eventData: {
  },
  eventDetail: {
  },
  text: {
  },
})

EventModal.defaultProps = defaultProps;
export default EventModal;