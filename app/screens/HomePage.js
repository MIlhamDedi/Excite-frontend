import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Card from '../component/Card.js';
import { GoogleSignin } from 'react-native-google-signin'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      user: GoogleSignin.currentUser()
    }
  }

  onNavigatorEvent(event) {
    if (event.id == 'willAppear') {
      if (this.scroll){
        this.scroll.scrollTo({x: 0, y: 0, animated: false});
      }
    }
    if (event.id == 'bottomTabReselected') {
      if (this.scroll){
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
      }
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <CalendarStrip
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#FFFFFF30'}}
          style={{height:100, paddingTop: 20, paddingBottom: 10, elevation: 5 }}
          maxDayComponentSize={40}
          calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#f44336'}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          highlightDateNumberStyle={{color: 'black'}}
          highlightDateNameStyle={{color: 'black'}}
          disabledDateNameStyle={{color: 'white'}}
          disabledDateNumberStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
        />
        <ScrollView
          overScrollMode= {'always'}
          ref={(c) => {this.scroll=c}}
          contentContainerStyle={{alignItems:'center'}}
        >
          <Text style={styles.headerText}>Here's your schedule today, { this.state.user.name.charAt(0).toUpperCase() + this.state.user.name.slice(1).toLowerCase() }!</Text>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40293308%2F78463962731%2F1%2Foriginal.jpg?w=800&rect=0%2C15%2C538%2C269&s=022d3a1f34fa8dfab85721a83c3db39f"
            title="Cloud AI BootCamp - Part I"
            time="9:00 AM – 11:00 AM"
            location="Microsoft Asia #21-01, 1 Marina Blvd "/>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40233510%2F242920397425%2F1%2Foriginal.jpg?w=800&rect=0%2C73%2C700%2C350&s=0805cd9b3b1f8c185da50bada4749d76"
            title="Blockchain Summit Singapore"
            time="2:00 PM – 5:00 PM"
            location="RAMADA AND DAYS HOTELS SINGAPORE AT ZHONGSHAN PARK, Ah Hood Rd "/>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39128267%2F235855786911%2F1%2Foriginal.jpg?w=800&rect=0%2C160%2C1920%2C960&s=b2799e2d99299ecddfedffe88549dd72"
            title="Constellation Explore Singapore"
            time="6:30 PM – 11:30 PM"
            location="Loof, 331 North Bridge Road, #3-07 Odeon Towers, Extension Rooftop Singapore "/>
          <Card />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Enjoy the day~
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window');
height = height-55;
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  headerText:{
    padding: 20,
    fontSize: 24,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10
  },
  footerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  footerText:{
    fontSize: 18,
    paddingTop: 20,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 5
  },
});
