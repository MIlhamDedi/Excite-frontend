import React, { Component } from 'react';
import {
  View,
  Platform,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableNativeFeedback,
  AlertIOS,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Swipe extends Component {
  render() {
    var cardArray = ['Event A', 'Event B', 'Event C', 'Event D', 'Event E', 'Event F']
    return (
      <View style={styles.container}>
          <Swiper
              cards={cardArray}
              renderCard={(card) => {
                  return (
                      <View style={styles.card}>
                          <Text style={styles.text}>{card}</Text>
                      </View>
                  )
              }}
              cardStyle={{
                top: 100,
                left: 25,
                bottom: 125,
                right: 25,
                width: 'auto',
                height: 'auto',
              }}
              infinite={true}
              onSwipedLeft={(cardIndex) => {Platform.OS === 'ios'
                ? AlertIOS.alert('Alert', 'Swiped ' + cardArray[cardIndex] + ' to the left')
                : ToastAndroid.show("Swiped "+ cardArray[cardIndex] + " To the left" , ToastAndroid.SHORT)
              }}
              onSwipedRight={(cardIndex) => {Platform.OS === 'ios'
                ? AlertIOS.alert('Alert', 'Swiped ' + cardArray[cardIndex] + ' to the right')
                : ToastAndroid.show("Swiped "+ cardArray[cardIndex] + " To the right", ToastAndroid.SHORT)
              }}
              onSwipedTop={(cardIndex) => {Platform.OS === 'ios'
                ? AlertIOS.alert('Alert', 'Swiped ' + cardArray[cardIndex] + ' to the top')
                : ToastAndroid.show("Swiped "+ cardArray[cardIndex] + " To the top", ToastAndroid.SHORT)
              }}
              onSwipedBottom={(cardIndex) => {Platform.OS === 'ios'
                ? AlertIOS.alert('Alert', 'Swiped ' + cardArray[cardIndex] + ' to the bottom')
                : ToastAndroid.show("Swiped "+ cardArray[cardIndex] + " To the bottom", ToastAndroid.SHORT)}}
              onSwipedAll={() => {ToastAndroid.show("That's all", ToastAndroid.SHORT)}}
              onTapCard={(cardIndex) => {Platform.OS === 'ios'
                ? AlertIOS.alert('Alert', 'Tap card ' + cardArray[cardIndex])
                : ToastAndroid.show("Tap card "+ cardArray[cardIndex], ToastAndroid.SHORT)
              }}
              cardIndex={0}
              backgroundColor={'#f44336'}>
              <View style={{paddingTop: 30, alignItems: 'flex-end', right: 25}} >
                <View style={{width: 24, height:24, borderRadius: 12, overflow: "hidden"}}>
                  <TouchableNativeFeedback
                    useForeground={true}
                    onPress={() => {Platform.OS === 'ios'
                        ? AlertIOS.alert('Alert', 'Info will be shown with this button')
                        : ToastAndroid.show("Info will be shown with this button", ToastAndroid.SHORT)
                      }}>
                    <View style={{backgroundColor: "#FAFAFA", borderRadius: 12}}>
                      <Icon name="info" size={24} color="#f44336" />
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
          </Swiper>
      </View>
    )
  }
}
export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  button:{
    width: 50,
    height: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#2196F3',
    borderRadius: 10,
  }
})
