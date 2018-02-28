import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import Card from '../component/Card.js';
import Icon from 'react-native-vector-icons/MaterialIcons'

class Explore extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {text: ''};
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
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <View style={styles.searchBar}>
            <Icon name='search' size={24} />
            <TextInput
              style={{marginLeft: 5, width: 240}}
              blurOnSubmit={true}
              onChangeText={ (text) => this.setState({text}) }
              value={this.state.text}
              returnKeyType={'search'}
              placeholder={'Search'}
              underlineColorAndroid={'transparent'}
            />
          </View>          
        </View>
        <ScrollView 
          style={ styles.scrollContainer }
          contentContainerStyle={{alignItems:'center'}}
          ref={(c) => {this.scroll=c}}
        >
          <Text style={styles.headerText}>Trending in Tech</Text>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39128267%2F235855786911%2F1%2Foriginal.jpg?w=800&rect=0%2C160%2C1920%2C960&s=b2799e2d99299ecddfedffe88549dd72"
            title="Constellation Explore Singapore"
            time="6:30 PM – 11:30 PM"
            location="Loof, 331 North Bridge Road, #3-07 Odeon Towers, Extension Rooftop Singapore "/>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40233510%2F242920397425%2F1%2Foriginal.jpg?w=800&rect=0%2C73%2C700%2C350&s=0805cd9b3b1f8c185da50bada4749d76"
            title="Blockchain Summit Singapore"
            time="2:00 PM – 5:00 PM"
            location="RAMADA AND DAYS HOTELS SINGAPORE AT ZHONGSHAN PARK, Ah Hood Rd "/>
          <Text style={styles.headerText}>Trending in Singapore</Text>
          <Card
            imageSource="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40293308%2F78463962731%2F1%2Foriginal.jpg?w=800&rect=0%2C15%2C538%2C269&s=022d3a1f34fa8dfab85721a83c3db39f"
            title="Sightseeing in Marina"
            time="9:00 AM – 11:00 AM"
            location="Marina Bay Sands, Singapore "/>
          <Text style={styles.headerText}>Recommended for you</Text>
          <Card />
          <View style={{paddingBottom: 70, height: 70}}></View>
        </ScrollView>
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window');
height = height-55
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  headerBar:{
    elevation: 5,
    backgroundColor: "#f44336",
  },
  searchBar:{
    elevation: 1,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer:{
  },
  headerText:{
    paddingTop: 40,
    left: 30,
    width: width,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 5
  }
});

export default Explore;
